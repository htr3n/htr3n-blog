[![Dependency Status](https://img.shields.io/librariesio/github/htr3n/htr3n-blog)](https://libraries.io/github/htr3n/htr3n-blog)
[![Known Vulnerabilities](https://snyk.io/test/github/htr3n/htr3n-blog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/htr3n/htr3n-blog?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Blog Source (<https://htr3n.github.io>)

This is the source of [my blog](https://htr3n.github.io) hosted at github.io. The blog uses the static site generator [Hugo](https://gohugo.io/) with the theme [`hyde-hyde`](https://github.com/htr3n/hyde-hyde) that I created. The generated and optimised site is hosted [here](https://github.com/htr3n/htr3n.github.io).

Since Hugo v0.43+, I might not need the Gulp-based workflow as Hugo provides sufficient support for transforming SCSS to CSS, PostCSS, and minification. Nevertheless, due to some issues with messing up sourcemaps, I still keep the Gulp 4 based workflow as it just works flawlessly for now.

Note that, we still have to install external tools for Hugo 0.43+ extensions to work.

```sh
yarn add -D postcss-cli autoprefixer # npm i -D postcss-cli autoprefixer
```

## Quick Start

Install NPM packages

```sh
yarn install  # npm install
```

## For Development and Debugging

Please have a look at [`package.json`](https://github.com/htr3n/htr3n-blog/blob/master/package.json) for the following commands and adapt them to your needs.

### Generate pages for local testing

```sh
yarn local  # npm run local
```

### Generate pages and keep watching for changes

```sh
yarn watch  # npm run watch
```

Hugo will generate draft and future posts for the localhost <https://localhost:1313> and keep an eye on any file changes and refresh the pages accordingly.

### Generate pages for remote hosting

Hugo will generate the posts without draft and future for the `baseURL`, e.g. 'https://htr3n.github.io'.

```sh
yarn deploy   # npm run deploy
```
