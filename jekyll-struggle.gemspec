# frozen_string_literal: true

require 'json'
require 'open-uri'
versions = JSON.parse(URI.open('https://pages.github.com/versions.json').read)
package = JSON.parse(File.read('./package.json'))

Gem::Specification.new do |spec|
  spec.name          = package["name"]
  spec.version       = package["version"]
  spec.authors       = ["twsl"]
  spec.email         = ["45483159+twsl@users.noreply.github.com"]

  spec.summary       = package["description"]
  spec.homepage      = package["homepage"]
  spec.license       = package["license"]

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(_layouts|_includes|_pages|_sass|assets|LICENSE|README|_config\.yml|index\.html)!i) }

  spec.required_ruby_version = ">= #{versions['ruby']}"

  spec.add_runtime_dependency "jekyll", ">= #{versions['jekyll']}"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7.1"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1.0"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4.0"
  spec.add_runtime_dependency 'jekyll-autoprefixer', "~> 1.0.2"

  spec.add_development_dependency "bundler"
end
