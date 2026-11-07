const fs=require('fs'),path=require('path');
const {chromium}=require('playwright');
const manifest=JSON.parse(fs.readFileSync('.course-test-results/full-audit-manifest.json'));
const out=process.env.AUDIT_OUTPUT||'.course-test-results/full-audit';
const base=process.env.AUDIT_BASE;
(async()=>{
 const browser=await chromium.launch({headless:true}); let cursor=0; const results=fs.existsSync(`${out}/browser.json`)?JSON.parse(fs.readFileSync(`${out}/browser.json`)).filter(x=>!x.error):[]; let done=results.length; const todo=manifest.map((x,i)=>({...x,number:i})).filter(x=>!results.some(r=>r.number===x.number));
 await Promise.all(Array.from({length:4},async(_,worker)=>{
  const ctx=await browser.newContext({viewport:{width:1280,height:900}});
  await ctx.route('**/*',route=>{const u=route.request().url(); if(/leancloud|valine|waline|unpkg.com|counter\.vercel|busuanzi/.test(u))return route.abort(); return route.continue();});
  const page=await ctx.newPage();
  while(cursor<todo.length){
   const item=todo[cursor++],n=item.number,errors=[]; const fail=[]; const rec={...item,number:n}; delete rec.file;
   const onerror=e=>errors.push(e.message);page.on('pageerror',onerror);
   try{
    const response=await page.goto((base?new URL(new URL(item.url).pathname,base).href:item.url)+'?audit='+ (process.env.AUDIT_VERSION||'full-render'),{waitUntil:'domcontentloaded',timeout:45000}); rec.status=response.status();
    fs.writeFileSync(`${out}/html/${n}.html`,await response.text());
    if(item.course)await page.waitForFunction(()=>['true','failed'].includes(document.querySelector('.course-content')?.dataset.rendered),{timeout:60000});
    else if(await page.locator('script[src*="tex-svg"],script[src*="MathJax"]').count()){
     await page.waitForFunction(()=>window.MathJax?.Hub?.Queue||window.MathJax?.startup?.promise,{timeout:45000});
     await page.evaluate(async()=>{if(MathJax.Hub)await new Promise(resolve=>MathJax.Hub.Queue(['Typeset',MathJax.Hub,document.querySelector('main article')],resolve));else await MathJax.startup.promise;});
    }
    await page.evaluate(async()=>{const imgs=[...document.querySelectorAll('main article img')];await Promise.all(imgs.map(async i=>{i.loading='eager';try{await Promise.race([i.decode(),new Promise(r=>setTimeout(r,15000))]);}catch{}}));await document.fonts.ready;});
    rec.render=await page.evaluate(()=>{
     const a=document.querySelector('main article'); const headings=[...a.querySelectorAll('h1,h2,h3,h4,h5,h6')];
     const ids=[...document.querySelectorAll('[id]')].map(n=>n.id);
     const walker=document.createTreeWalker(a,NodeFilter.SHOW_TEXT); const raw=[];while(walker.nextNode()){let n=walker.currentNode;if(!n.parentElement.closest('script,style,pre,code,mjx-container,.MathJax,.MathJax_CHTML,.MathJax_Display,.MJX_Assistive_MathML')){let s=n.textContent;if(/\$|\\(?:begin\{|frac\{|sum\b|sqrt\{|left\b)|\$[^$\n]{1,140}\$|!\[\[|\[\[[^\]]+\]\]/.test(s)){if(!(s.includes('Identifiers')&&s.includes('$和_')&&s.split('$').length===2))raw.push(s.trim().slice(0,350));}}}
     return {math:window.MathJax?.Hub?MathJax.Hub.getAllJax(a).length:a.querySelectorAll('mjx-container').length, mathErrors:[...a.querySelectorAll('.MathJax_Error,.mjx-merror,[data-mjx-error],.course-math-error,mtext[mathcolor="red"]')].map(e=>({text:e.textContent,error:e.getAttribute('data-mjx-error'),title:e.title})),brokenImages:[...a.querySelectorAll('img')].filter(i=>!i.complete||!i.naturalWidth).map(i=>({src:i.currentSrc||i.src,alt:i.alt})), images:a.querySelectorAll('img').length,distortedImages:[...a.querySelectorAll('img')].filter(i=>i.naturalWidth>64&&i.width>0&&Math.abs((i.width/i.height)/(i.naturalWidth/i.naturalHeight)-1)>.04).map(i=>({src:i.src,width:i.width,height:i.height,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight})),tables:[...a.querySelectorAll('table')].map(t=>({rows:t.rows.length,columns:[...t.rows].map(r=>r.cells.length),text:t.textContent.slice(0,100)})),raw,duplicateIds:[...new Set(ids.filter((v,i)=>ids.indexOf(v)!==i))],nestedHeadings:headings.filter(h=>h.closest('li,blockquote')).map(h=>h.textContent),breaks:a.querySelectorAll('br').length, links:[...a.querySelectorAll('a[href]')].map(x=>({href:x.href,text:x.textContent.slice(0,80)}))};
    });
    rec.widths=[];
    for(const width of [1280,390,320]){
     await page.setViewportSize({width,height:900});
     await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
     const layout=await page.evaluate(()=>{const max=innerWidth;return {width:max,scrollWidth:document.documentElement.scrollWidth,overflow:[...document.querySelectorAll('main article *')].filter(e=>{const r=e.getBoundingClientRect();if(r.width<1||r.right<=max+2)return false;for(let p=e.parentElement;p&&p!==document.body;p=p.parentElement)if(['auto','scroll','hidden','clip'].includes(getComputedStyle(p).overflowX))return false;return true;}).slice(0,12).map(e=>({tag:e.tagName,cls:e.className?.baseVal??e.className,id:e.id,right:Math.round(e.getBoundingClientRect().right),text:e.textContent.slice(0,160)}))};}); rec.widths.push(layout);
    }
    rec.pageErrors=errors;
    if(rec.status!==200||rec.render.mathErrors.length||rec.render.brokenImages.length||rec.widths.some(x=>x.scrollWidth>x.width+2)||rec.render.raw.length){
     const name=`${n}-${new URL(item.url).pathname.split('/').filter(Boolean).join('-')}`;
     await page.setViewportSize({width:390,height:900});await page.screenshot({path:`${out}/screenshots/${name}-mobile.png`,fullPage:false});rec.screenshot=name;
    }
   }catch(e){rec.error=e.message;}
   page.off('pageerror',onerror);results.push(rec);done++;
   fs.writeFileSync(`${out}/browser.json`,JSON.stringify(results.sort((a,b)=>a.number-b.number),null,2));
   if(done%10===0)console.log(`${done}/${manifest.length} checked; ${results.filter(x=>x.error||x.render?.mathErrors.length||x.render?.brokenImages.length||x.widths?.some(w=>w.scrollWidth>w.width+2)).length} pages need review`);
  }
  await ctx.close();
 }));await browser.close();console.log('All deployed pages audited.');
})().catch(e=>{console.error(e);process.exit(1)});
