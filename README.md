<html>
    <p align="center">
        <img src="https://raw.githubusercontent.com/flyteorg/static-resources/main/common/flyte_circle_gradient_1_4x4.png" alt="Flyte Logo" width="100">
    </p>
    <h1 align="center">
        Flyte Website
    </h1>
    <p align="center">
        Source code repository of flyte.org
    </p>
</html>

flyte.org is built using [Jekyll](https://jekyllrb.com/) and [Tailwind](https://tailwindcss.com). You can refer to the [Getting started](#getting-started) section to get a local testing environment up and running.

| **📝 Note** |
|:---------|
| `development` is the primary branch to host the site. |

## ⚙️ Requirements

This site uses the following packages.

- [Bundler](http://bundler.io/)
- [Jekyll](https://jekyllrb.com/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Tailwind](https://tailwindcss.com)

## 🚀 Getting Started

- Install the [prerequisites](https://jekyllrb.com/docs/installation/)
- Install tailwind using the command `npm install -D tailwindcss`
- Install tailwind forms using the command `npm install -D @tailwindcss/forms`
- Install bundler using the command `gem install bundler`
- Run `bundle install` to install the Ruby gems specified in Gemfile
- (Optional) Run `bundle update` to update the Ruby gems
- Run the command `bundle exec jekyll serve --livereload` to test the site locally
- Open a new tab and run `npx tailwindcss -i ./assets/css/style.css -o ./assets/css/output.css --watch` in the root of the repo to build CSS
- Visit `http://127.0.0.1:4000/` to view the site

| **📝 Note** |
|:---------|
| Site gets automatically built on pushing the changes to the repository. |

### Troubleshooting Guidelines

- If you encounter an error relating to `eventmachine` package during `bundle install`, make sure that `gem install eventmachine -v '1.2.7' --source 'https://rubygems.org/'` succeeds before bundling, and run the following command:

```
gem install eventmachine -- --with-cppflags=-I/usr/local/opt/openssl/include
```

- If the following error pops up,

```
bundler: failed to load command: jekyll
```

run the following command:

```
bundle add webrick
```
