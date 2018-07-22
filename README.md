This is the working-in-progress source of [my blog](https://htr3n.github.io) hosted at github.io. The blog uses the static site generator [Hugo](https://gohugo.io/) with theme [`hyde-hyde`](https://github.com/htr3n/hyde-hyde).

Since Hugo v0.43+, I might not need the Gulp-based workflow as Hugo provides sufficient support for transforming SCSS to CSS, PostCSS, and minification. Nevertheless, due to some issues with messing up sourcemaps, I still keep the Gulp 4 based workflow as it just works flawlessly for now.

Note that, we still have to install external tools for Hugo 0.43+ extensions to work.

```sh
npm i -D postcss-cli autoprefixer
```

## Quick Start

For development and debugging:

```sh
npm run dev
```

For production release:

```sh
npm run prod
```
