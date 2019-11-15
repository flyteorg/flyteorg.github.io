# flyteorg.github.io
flyte.org home page

Flyte.org is built using [Tailwind](https://tailwindcss.com) with [Jekyll](https://jekyllrb.com/).

##Gulpfile
* Compiles Tailwind
* Strips out unused CSS using [Purgecss](http://www.purgecss.com/)
* Runs [Autoprefixer](https://github.com/postcss/autoprefixer)
* Minifies your CSS
* Generate a CSS sourcemap
* Compiles Jekyll
* Runs [Browsersync](https://www.browsersync.io/) for local development

## Requirements
* [Bundler](http://bundler.io/)
* [Jekyll](https://jekyllrb.com/)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Ruby](https://www.ruby-lang.org/en/)

## Get started
* `bundle install` to install Ruby gems
* `npm ci` to install npm packages listed in `package-lock.json`
* `npm run start` to compile the site with development settings and run BrowserSync

## Build your site
Site builds to `_site`. Modify as needed for deployment in `_config.yml` and `gulpfile.babel.js`.

* `npm run build:dev` to compile the site with development settings
* `npm run build` to compile the site for production
