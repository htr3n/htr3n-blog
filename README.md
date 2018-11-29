[![Dependency Status](https://david-dm.org/htr3n/htr3n-blog.svg?theme=shields.io)](https://david-dm.org/htr3n/htr3n-blog)
[![devDependency Status](https://david-dm.org/htr3n/htr3n-blog/dev-status.svg?theme=shields.io)](https://david-dm.org/htr3n/htr3n-blog#info=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/htr3n/htr3n-blog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/htr3n/htr3n-blog?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Blog Source (<https://htr3n.github.io>)

This is the working-in-progress source of [my blog](https://htr3n.github.io) hosted at github.io. The blog uses the static site generator [Hugo](https://gohugo.io/) with theme [`hyde-hyde`](https://github.com/htr3n/hyde-hyde). The generated and optimised site is hosted [here](https://github.com/htr3n/htr3n.github.io).

Since Hugo v0.43+, I might not need the Gulp-based workflow as Hugo provides sufficient support for transforming SCSS to CSS, PostCSS, and minification. Nevertheless, due to some issues with messing up sourcemaps, I still keep the Gulp 4 based workflow as it just works flawlessly for now.

Note that, we still have to install external tools for Hugo 0.43+ extensions to work.

```sh
npm i -D postcss-cli autoprefixer
```

## Quick Start

Install NPM packages

```sh
npm install
```

## For Development and Debugging

Please have a look at [`package.json`](https://github.com/htr3n/htr3n-blog/blob/master/package.json) for the following commands and adapt them to your needs.

### Generate pages for local hosting

```sh
npm run hugo-local
```

Hugo will generate draft and future posts for the baseURL <https://blog.test:8443>.

### Generate pages and keep watching for changes

```sh
npm run hugo-watch
```

Hugo will generate draft and future posts for the localhost baseURL <https://blog.test:8443> and keep an eye on any file changes and refresh the pages accordingly.

### Generate pages for remote hosting

Hugo will generate the posts without draft and future for the baseURL <https://htr3n.github.io> (my site).

```sh
npm run deploy
```
