require 'nokogiri';require 'json';require 'uri'
ps=JSON.parse(File.read(ENV.fetch('AUDIT_MANIFEST','.course-test-results/full-audit-manifest.json')))
root=(ENV['AUDIT_SOURCE']||JSON.parse(File.read('.course-test-results/isolated-release.json'))['source'])+'/_site'
failures=[];count=0;docs={}
ps.each do |p|
 (p['links']+p['images']).each do |href|
  begin
   escaped=href.gsub(/[^\x00-\x7F]/){|c|c.bytes.map{|b|'%%%02X'%b}.join}
   base=p['url'].gsub(/[^\x00-\x7F]/){|c|c.bytes.map{|b|'%%%02X'%b}.join};u=URI.join(base,escaped);next unless u.host=='joyslog.top';count+=1
   f=root+URI::DEFAULT_PARSER.unescape(u.path);f+='index.html' if f.end_with?('/')
   unless File.file?(f);failures<<{page:p['url'],href:href,reason:'missing file'};next;end
   if u.fragment && !u.fragment.empty? && f.end_with?('.html')
    d=docs[f]||=Nokogiri::HTML(File.read(f));id=URI::DEFAULT_PARSER.unescape(u.fragment)
    failures<<{page:p['url'],href:href,reason:'missing anchor'} unless d.css('[id],[name]').any?{|a|a['id']==id||a['name']==id}
   end
  rescue=>e;failures<<{page:p['url'],href:href,reason:e.message};end
 end
end
File.write(ENV.fetch('AUDIT_LINKS_OUTPUT','.course-test-results/full-audit/local-links.json'),JSON.pretty_generate({checked:count,failures:failures}))
puts JSON.pretty_generate({checked:count,failures:failures})
