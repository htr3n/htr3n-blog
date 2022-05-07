[![Dependency Status](https://img.shields.io/librariesio/github/htr3n/htr3n-blog)](https://libraries.io/github/htr3n/htr3n-blog)
[![Known Vulnerabilities](https://snyk.io/test/github/htr3n/htr3n-blog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/htr3n/htr3n-blog?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Blog Source (<https://htr3n.github.io>)

This is the source of [my blog](https://htr3n.github.io) hosted at github.io. I use [Hugo](https://gohugo.io/) with the theme [`hyde-hyde`](https://github.com/htr3n/hyde-hyde) that I created to generate the static resources (HTML, JS, CSS, etc.) and use Gulp with some simple tasks for minifying and setting up other resources (e.g. Keybase).

## Quick Start

Install the NPM dependencies

```sh
yarn install  # npm install
```

## Developing and Deploying

Look into the file [`package.json`](https://github.com/htr3n/htr3n-blog/blob/master/package.json) for the following commands and adapt them to your need. You might need to adjust the `baseURL` value.

### Generate pages for local testing

```sh
yarn local  # npm run local
```

### Generate pages and keep watching for changes

```sh
yarn watch  # npm run watch
```

Hugo will generate drafts and future posts for the localhost <https://localhost:1313> and keep an eye on any file changes and refresh the pages accordingly.

### Generate pages for remote hosting

Hugo will generate the posts excluding drafts and futures for the configured `baseURL`, e.g. 'https://htr3n.github.io'.

```sh
yarn deploy   # npm run deploy
```



# License

MIT, of course.
