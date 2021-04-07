# flyteorg.github.io

flyte.org home page

Flyte.org is built using [Tailwind](https://tailwindcss.com) with [Jekyll](https://jekyllrb.com/). You can refer to the [Get started](#get-started) section to get a local testing environment for the site. Once you modify and verify the changes locally, simply push it to remote and the site will be automatically built.

**Note**: Currently we are using the development branch as the primary branch to host the website

## Requirements
This site uses the following packages. To setup the environment - directly jump to the [Get Started](#get-started) section
- [Bundler](http://bundler.io/)
- [Jekyll](https://jekyllrb.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Ruby](https://www.ruby-lang.org/en/)

## Get started

- Environment Setup - install [Ruby & Bundler](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#prerequisites)
- `bundle install` to install Ruby gems
- `npm ci` to install npm packages listed in `package-lock.json`
- `npm run start` to compile the site with development settings and run BrowserSync

## Build your site

Site builds to `_site`. Modify as needed for deployment in `_config.yml` and `gulpfile.babel.js`.

- `npm run build:dev` to compile the site with development settings
- `npm run build` to compile the site for production

## Gulpfile

- Compiles Tailwind
- Strips out unused CSS using [Purgecss](http://www.purgecss.com/)
- Runs [Autoprefixer](https://github.com/postcss/autoprefixer)
- Minifies your CSS
- Generate a CSS sourcemap
- Compiles Jekyll
- Runs [Browsersync](https://www.browsersync.io/) for local development


