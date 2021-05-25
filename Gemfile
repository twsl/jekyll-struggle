# frozen_string_literal: true

source "https://rubygems.org"
gemspec

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]

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

gem "kramdown-parser-gfm" if ENV["JEKYLL_VERSION"] == "~> 3.9"
gem "kramdown-math-katex" if ENV["JEKYLL_VERSION"] == "~> 3.9"
