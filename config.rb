activate :i18n, mount_at_root: :fr
activate :directory_indexes

activate :blog do |blog|
  blog.sources = "posts/{year}-{month}-{day}-{title}.html"
  blog.summary_separator = /(READMORE)/
  blog.summary_length = 150
end

$LOAD_PATH.unshift("#{File.dirname(__FILE__)}/lib")
require "custom_helpers"
helpers CustomHelpers
