# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "struggle"
  spec.version       = "0.1.0"
  spec.authors       = ["twsl"]
  spec.email         = ["45483159+twsl@users.noreply.github.com"]

  spec.summary       = "A simple, sleek and modern Jekyll blog theme."
  spec.homepage      = "https://github.com/twsl/blog-struggle"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1.1"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15.1"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7.1"

  spec.add_development_dependency "bundler", "~> 2.1.4"
end
