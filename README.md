This is the WIP source code of my [blog](https://htr3n.github.io) hosted at github.io. The blog uses the static site generator [Hugo](https://gohugo.io/) with theme [`hyde-hyde`](https://github.com/htr3n/hyde-hyde).

Since Hugo v0.43+, I no longer need the Gulp-based workflow as Hugo provides sufficient support for transforming SCSS to CSS, PostCSS, and minifcation.

Nevertheless, external tools must be installed for Hugo extensions to work.

```sh
npm i -D postcss-cli autoprefixer
```

For development and debugging:

```sh
npm run dev
```

For production release:

```sh
npm run prod
```