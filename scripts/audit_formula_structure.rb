require 'json';require 'nokogiri'
ps=JSON.parse(File.read('.course-test-results/full-audit/after/manifest.json'))
issues=[];literals=[];layout_tables=[]
ps.each do |p|
 d=Nokogiri::HTML(File.read(p['file']));a=d.at_css('main article')
 a.css('table').each do |t|
  next if t.at_css('thead')
  if t['class'].to_s.include?('rouge')||t.ancestors.any?{|e|e['class'].to_s.include?('highlight')||e.name=='pre'}
   layout_tables<<{page:p['url'],kind:'code layout'}
  else
   issues<<{page:p['url'],kind:'headerless table',text:t.text[0,200]}
  end
 end
 a.css('pre,code,script,style,.course-math').remove
 a.css('p,li,td,th,h1,h2,h3,h4,h5,h6').each do |e|
  next unless e.text.count('$').odd?
  if p['url'].end_with?('/courses/java/sustech-cs109/')&&e.text.include?('Identifiers')&&e.text.include?('$和_')
   literals<<{page:p['url'],kind:'literal Java identifier character',text:e.text}
  else
   issues<<{page:p['url'],kind:'unpaired dollar in block',text:e.text[0,300]}
  end
 end
end
File.write('.course-test-results/full-audit/formula-structure.json',JSON.pretty_generate({pages:ps.size,issues:issues,literals:literals,layout_tables:layout_tables}))
puts JSON.pretty_generate({pages:ps.size,issues:issues,literals:literals.size,layout_tables:layout_tables.size})
abort('source structure audit failed') unless issues.empty?
