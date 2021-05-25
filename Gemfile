# frozen_string_literal: true

source "https://rubygems.org"
gemspec

require 'json'
require 'open-uri'
# Use URI.open after github uses ruby 3
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

#gem 'github-pages', versions['github-pages']

gem "jekyll", versions['jekyll']

group :jekyll_plugins do
  gem "jekyll-autoprefixer", "~> 1.0.2"
  gem "jekyll-feed", "~> 0.15.0"
  gem "jekyll-octicons", "~> 14.1.0"
  gem "jekyll-remote-theme", "~> 0.4.3"
  gem "jekyll-twitter-plugin", "~> 2.1.0"
  gem "jekyll-relative-links", "~> 0.6.1"
  gem "jekyll-seo-tag", "~> 2.7.1"
  gem "jekyll-toc", "~> 0.17.0"
  gem "jekyll-gist", "~> 1.5.0"
  gem "jekyll-paginate", "~> 1.1.0"
  gem "jekyll-sitemap", "~> 1.4.0"
  # temp lock
  gem 'execjs', '2.7.0'
end

gem "kramdown-parser-gfm", "~> 1.1.0"
gem "kramdown-math-katex", "~> 1.0.1"
gem "jemoji", "~> 0.12.0"
