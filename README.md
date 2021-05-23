# struggle

[![Gem Version](https://badge.fury.io/rb/jekyll-struggle.svg)](https://badge.fury.io/rb/jekyll-struggle)

A simple, sleek and modern Jekyll blog theme made with love and Bootstrap.

## fastpages

This theme is intended to be used with [fastpages](https://github.com/fastai/fastpages), but tries to improve the style significantly.
Therefore apart from replacing the referenced theme [minima](https://github.com/jekyll/minima), some further modifications are rquired.

Remove:

```
_includes/
_layouts/
_pages/
_sass/minima/
```

## Start

See: <https://code.visualstudio.com/docs/remote/create-dev-container>











https://blog.webjeda.com/jekyll-categories/






## Inspo
https://dribbble.com/fintory
https://fintory.com/en/blog/why-is-motion-design-so-important-to-user-experience
https://dribbble.com/shots/10540722-Investment-App-Wireframes





## Resources

- [Build Jekyll iamge](https://github.com/alastairhm/alpine-jekyll)
- [Devcontainers](https://github.com/microsoft/vscode-dev-containers/tree/master/containers/jekyll)
- [](https://medium.com/@jameshamann/creating-your-own-jekyll-theme-gem-1f8180a0e4b8)
- <https://www.chrisanthropic.com/blog/2016/creating-gem-based-themes-for-jekyll/>
- <https://www.codepedia.org/ama/how-to-handle-multiple-authors-in-jekyll/>
- <https://medium.com/better-programming/an-introduction-to-using-jekyll-with-bootstrap-4-6f2433afeda9>
- <https://gist.github.com/JJediny/a466eed62cee30ad45e2>
- <https://shopify.github.io/liquid/filters/slice/>

- <https://pikock.github.io/bootstrap-magic/app/index.html#!/editor>
- <https://getbootstrap.com/docs/4.1/components/card/>

- [dark mode](https://medium.com/@derekkedziora/how-to-add-a-dark-mode-toggle-to-a-jekyll-site-a76dac00128d)

## Theme

- [Best design](https://blog.uidesigndaily.com/)
- [Clean blog](https://github.com/StartBootstrap/startbootstrap-clean-blog-jekyll)
- [Blog example](https://theme-land.com/sapp/demo/blog-two-column.html)
- [Central overlay example](https://demos.creative-tim.com/material-kit/index.html)
- [Color Scheme](https://dribbble.com/shots/10540722-Investment-App-Wireframes)
- [structure example](https://github.com/Huxpro/huxblog-boilerplate)
- [clean white](https://r-oblas.avmthemes.ru/blog)
- [animated header](https://templates.envytheme.com/aronix/default/blog-1.html)
- [clean color](http://arty.flatheme.net/home/portfolio-clean-1.html)
- [post example](http://arty.flatheme.net/blog/blog-fullwidth-clean.html)
- [nice overview](https://preview.webpixels.io/purpose-website-ui-kit/pages/secondary/blog.html#)
- [additional design rootui](https://html.nkdev.info/rootui/react/#/)
- [blog perfect layout](https://themes.2the.me/Boomerang/1.2/start.html)
- [central overlay](https://demo.createx.studio/createx/)
- [theme](https://melwy.com/)
- [logo](https://placeholderlogo.com/)
- <http://themeturn.com/free/coral/>

- <https://codepen.io/AbubakerSaeed/pen/abzWqPb>
- <https://codepen.io/P1N2O/pen/pyBNzX>
- <https://codepen.io/BjornRombaut/pen/mOLGgX>
- <https://codepen.io/AbubakerSaeed/pen/abzWqPb>

- <https://github.com/coliff/dark-mode-switch>

- <http://themes.hody.co/html/bezel/blog.html>

- <http://volar.makwan.net/blog.html>
- <http://volar.makwan.net/index02.html>
- <http://volar.makwan.net/index04.html>

- <http://themes.hody.co/html/bezel/blog.html>
- <http://themes.hody.co/html/bezel/blog-single.html>

- <https://demo.bootstrapious.com/blog/1-2-1/>

- fixed float effect https://preview.envytheme.com/startp-react/

- dark color scheme https://d-board-nextjs.mobifica.com/

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "struggle"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: struggle
```

And then execute:

    bundle

Or install it yourself as:

    gem install struggle

## Update

```
bundle outdated
bundle update
```
```
yarn outdated
yarn upgrade --latest
```

## Contents At-A-Glance

### Layouts

Refers to files within the `_layouts` directory, that define the markup for your theme.

- `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says `{{ content }}` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
- `home.html` &mdash; The layout for your landing-page / home-page / index-page. [[More Info.](#home-layout)]
- `page.html` &mdash; The layout for your documents that contain FrontMatter, but are not posts.
- `post.html` &mdash; The layout for your posts.

#### Home Layout

`home.html` is a flexible HTML layout for the site's landing-page / home-page / index-page. <br/>

##### _Main Heading and Content-injection_

From Minima v2.2 onwards, the _home_ layout will inject all content from your `index.md` / `index.html` **before** the **`Posts`** heading. This will allow you to include non-posts related content to be published on the landing page under a dedicated heading. _We recommended that you title this section with a Heading2 (`##`)_.

Usually the `site.title` itself would suffice as the implicit 'main-title' for a landing-page. But, if your landing-page would like a heading to be explicitly displayed, then simply define a `title` variable in the document's front matter and it will be rendered with an `<h1>` tag.

##### _Post Listing_

This section is optional from Minima v2.2 onwards.<br/>
It will be automatically included only when your site contains one or more valid posts or drafts (if the site is configured to `show_drafts`).

The title for this section is `Posts` by default and rendered with an `<h2>` tag. You can customize this heading by defining a `list_title` variable in the document's front matter.

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.

- `disqus_comments.html` &mdash; Code to markup disqus comment box.
- `footer.html` &mdash; Defines the site's footer section.
- `google-analytics.html` &mdash; Inserts Google Analytics module (active only in production environment).
- `head.html` &mdash; Code-block that defines the `<head></head>` in _default_ layout.
- `custom-head.html` &mdash; Placeholder to allow users to add more metadata to `<head />`.
- `header.html` &mdash; Defines the site's main header section. By default, pages with a defined `title` attribute will have links displayed here.
- `social.html` &mdash; Renders social-media icons based on the `minima:social_links` data in the config file.

### Sass

Refers to `.scss` files within the `_sass` directory that define the theme's styles.

- `minima/skins/classic.scss` &mdash; The "classic" skin of the theme. _Used by default._
- `minima/initialize.scss` &mdash; A component that defines the theme's _skin-agnostic_ variable defaults and sass partials.
  It imports the following components (in the following order):
  - `minima/custom-variables.scss` &mdash; A hook that allows overriding variable defaults and mixins. (_Note: Cannot override styles_)
  - `minima/_base.scss` &mdash; Sass partial for resets and defines base styles for various HTML elements.
  - `minima/_layout.scss` &mdash; Sass partial that defines the visual style for various layouts.
  - `minima/custom-styles.scss` &mdash; A hook that allows overriding styles defined above. (_Note: Cannot override variables_)

Refer the [skins](#skins) section for more details.

### Assets

Refers to various asset files within the `assets` directory.

- `assets/css/style.scss` &mdash; Imports sass files from within the `_sass` directory and gets processed into the theme's
  stylesheet: `assets/css/styles.css`.
- `assets/minima-social-icons.svg` &mdash; A composite SVG file comprised of _symbols_ related to various social-media icons.
  This file is used as-is without any processing. Refer [section on social networks](#social-networks) for its usage.

### Plugins

Minima comes with [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag) plugin preinstalled to make sure your website gets the most useful meta tags. See [usage](https://github.com/jekyll/jekyll-seo-tag#usage) to know how to set it up.

## Usage

Have the following line in your config file:

```yaml
theme: minima
```

### Customize navigation links

This allows you to set which pages you want to appear in the navigation area and configure order of the links.

For instance, to only link to the `about` and the `portfolio` page, add the following to your `_config.yml`:

```yaml
header_pages:
  - about.md
  - portfolio.md
```

### Change default date format

You can change the default date format by specifying `site.minima.date_format`
in `_config.yml`.

```
# Minima date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this
minima:
  date_format: "%b %-d, %Y"
```

### Extending the `<head />`

You can _add_ custom metadata to the `<head />` of your layouts by creating a file `_includes/custom-head.html` in your source directory. For example, to add favicons:

1. Head over to [https://realfavicongenerator.net/](https://realfavicongenerator.net/) to add your own favicons.
2. [Customize](#customization) default `_includes/custom-head.html` in your source directory and insert the given code snippet.

### Enabling comments (via Disqus)

Optionally, if you have a Disqus account, you can tell Jekyll to use it to show a comments section below each post.

To enable it, add the following lines to your Jekyll site:

```yaml
disqus:
  shortname: my_disqus_shortname
```

You can find out more about Disqus' shortnames [here](https://help.disqus.com/installation/whats-a-shortname).

Comments are enabled by default and will only appear in production, i.e., `JEKYLL_ENV=production`

If you don't want to display comments for a particular post you can disable them by adding `comments: false` to that post's YAML Front Matter.

:warning: `url`, e.g. `https://example.com`, must be set in you config file for Disqus to work.

### Author Metadata

From `Minima-3.0` onwards, `site.author` is expected to be a mapping of attributes instead of a simple scalar value:

```yaml
author:
  name: John Smith
  email: "john.smith@foobar.com"
```

To migrate existing metadata, update your config file and any reference to the object in your layouts and includes as summarized below:

| Minima 2.x    | Minima 3.0          |
| ------------- | ------------------- |
| `site.author` | `site.author.name`  |
| `site.email`  | `site.author.email` |

### Social networks

You can add links to the accounts you have on other sites, with respective icon, by adding one or more of the following options in your config.
From `Minima-3.0` onwards, the usernames are to be nested under `minima.social_links`, with the keys being simply the social-network's name:

```yaml
minima:
  social_links:
    twitter: jekyllrb
    github: jekyll
    stackoverflow: "11111"
    dribbble: jekyll
    facebook: jekyll
    flickr: jekyll
    instagram: jekyll
    linkedin: jekyll
    pinterest: jekyll
    telegram: jekyll
    microdotblog: jekyll
    keybase: jekyll

    mastodon:
      - username: jekyll
        instance: example.com
      - username: jekyll2
        instance: example.com

    gitlab:
      - username: jekyll
        instance: example.com
      - username: jekyll2
        instance: example.com

    youtube: jekyll
    youtube_channel: UC8CXR0-3I70i1tfPg1PAE1g
    youtube_channel_name: CloudCannon
```

### Enabling Google Analytics

To enable Google Analytics, add the following lines to your Jekyll site:

```yaml
google_analytics: UA-NNNNNNNN-N
```

Google Analytics will only appear in production, i.e., `JEKYLL_ENV=production`

### Enabling Excerpts on the Home Page

To display post-excerpts on the Home Page, simply add the following to your `_config.yml`:

```yaml
show_excerpts: true
```

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `struggle.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
