require 'open-uri'
require 'nokogiri'
require 'cgi'

source = 'https://www.pinterest.fr/arnaudlevy/feed.rss'
destination = '_includes/background.html'

data = URI.open source
doc = Nokogiri::XML data
images = []
doc.xpath('//item/description').each do |description|
  html = CGI.unescapeHTML description
  src = Nokogiri::HTML(html).css('img @src')
  images << src
  puts src
end

images = images + images + images

html = ''
images.each do |image|
  html << "<img src=\"#{image}\" alt=\"\" width=\"260\">"
end

File.write(destination, html)
