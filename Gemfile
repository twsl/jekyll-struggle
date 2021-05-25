# frozen_string_literal: true

source "https://rubygems.org"
gemspec

require 'json'
require 'open-uri'
# Use URI.open after github uses ruby 3
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

#gem 'github-pages', versions['github-pages']

gem "jekyll", ">= #{versions['jekyll']}"

group :jekyll_plugins do
  gem "jekyll-autoprefixer", "~> 1.0.2"
  gem "jekyll-feed"
  gem "jekyll-octicons"
  gem "jekyll-remote-theme"
  gem "jekyll-twitter-plugin"
  gem "jekyll-relative-links"
  gem "jekyll-seo-tag"
  gem "jekyll-toc"
  gem "jekyll-gist"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"
  # temp lock
  gem 'execjs', '2.7.0'
end

gem "jemoji"

gem "kramdown-parser-gfm"
gem "kramdown-math-katex"
