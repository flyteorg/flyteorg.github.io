# flyteorg.github.io

flyte.org home page

Flyte.org is built using [Tailwind](https://tailwindcss.com) with [Jekyll](https://jekyllrb.com/). You can refer to the [Get started](#get-started) section to get a local testing environment for the site. Once you modify and verify the changes locally, simply push it to remote and the site will be automatically built.

**Note**: Currently we are using the development branch as the primary branch to host the website.

## Requirements

This site uses the following packages. To set up the environment - directly jump to the [Get Started](#get-started) section.

- [Bundler](http://bundler.io/)
- [Jekyll](https://jekyllrb.com/)
- [Ruby](https://www.ruby-lang.org/en/)
- [Tailwind](https://tailwindcss.com)

## Get started

- Install all [prerequisites](https://jekyllrb.com/docs/installation/)
    - Tailwind can be installed using the command `npm install -D tailwindcss`
- Install Bundler

```
gem install jekyll bundler
```

- `bundle install` to install the Ruby gems specified in Gemfile
- (Optional) Run `bundle update` if you need to update the Ruby gems
- Run the command `bundle exec jekyll serve --livereload` to test the site locally
- Open a new tab and run `npx tailwindcss -i ./assets/css/style.css -o ./assets/css/output.css --watch` in the root of the repo to build CSS
- Visit `http://127.0.0.1:4000/` to view your site

## Troubleshooting Guidelines

- If you encounter an error relating to `eventmachine` package during `bundle install`:

```
Make sure that `gem install eventmachine -v '1.2.7' --source 'https://rubygems.org/'` succeeds before bundling.
```

run the following command:

```
gem install eventmachine -- --with-cppflags=-I/usr/local/opt/openssl/include
```

- If jekyll isn't being identified:

```
bundler: failed to load command: jekyll
```

run the following command:

```
bundle add webrick
```

## How to Add/Modify Announcements

### Talk

To add a talk, copy the card1 template code and add it to the card series.
To delete a talk, delete the concerning card.

### Feature Release

To add a feature release, copy the card5 template code and add it to the card series.
To delete a feature release, delete the concerning card.

### Blog

To add a blog, copy the card6 template code and add it to the card series.
To delete a blog, delete the concerning card.

You can find all cards in the `index.html` file.

- card series

```
<!--cards-->
```

^ start of cards' section

```
<!--end of cards-->
```

^ end of cards' section

- card

```
<!--card x-->
```

^ start of card x

```
<!--end of card x-->
```

^ end of card x
