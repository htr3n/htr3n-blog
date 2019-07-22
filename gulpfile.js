const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const htmlmin = require("gulp-htmlmin");
const log = require("fancy-log");
const del = require("del");
const print = require("gulp-print").default;
const using = require("gulp-using");

const themeScssBase = "themes/hyde-hyde/assets/scss/";

const scssFiles = {
  hydehyde: "hyde-hyde.scss",
  print: "print.scss",
  hugotoc: "hugo-toc.scss",
  tocbot: "tocbot.scss",
};

const compilationTasks = Object.keys(scssFiles);

const watchedResources = "themes/hyde-hyde/assets/scss/**/*";
const themeOutputCssFolder = "themes/hyde-hyde/static/css";

gulp.task("compile-hyde-scss", function(done) {
  log("Compiling 'hyde-hyde.scss' to '" + themeOutputCssFolder + "'");
  gulp
    .src(hydehydeSass)
    .pipe(sourcemaps.init())
    .pipe(
      sass().on("error", function(err) {
        log.error(err.message);
      })
    )
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(themeOutputCssFolder))
    .on("end", done);
});

compilationTasks.forEach(taskName => {
  gulp.task("compile-" + taskName, function(done) {
    let scssFile = themeScssBase + scssFiles[taskName];
    log("Compiling '" + scssFile + "' to '" + themeOutputCssFolder + "'");
    gulp
      .src(scssFile)
      .pipe(sourcemaps.init())
      .pipe(
        sass().on("error", function(err) {
          log.error(err.message);
        })
      )
      .pipe(postcss([autoprefixer]))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(themeOutputCssFolder))
      .on("end", done);
  });
  gulp.task("minify-" + taskName, function(done) {
    let scssFile = themeScssBase + scssFiles[taskName];
    log("Compiling '" + scssFile + "' to '" + themeOutputCssFolder + "'");
    gulp
      .src(scssFile)
      .pipe(sourcemaps.init())
      .pipe(
        sass().on("error", function(err) {
          log.error(err.message);
        })
      )
      .pipe(postcss([autoprefixer, cssnano]))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(themeOutputCssFolder))
      .on("end", done);
  });
});

gulp.task("compile-scss", gulp.parallel("compile-hydehyde", "compile-print", "compile-hugotoc", "compile-tocbot", function(done) {
  done();
}));

gulp.task("minify-scss", gulp.parallel("minify-hydehyde", "minify-print", "minify-hugotoc", "minify-tocbot", function(done) {
  done();
}));

gulp.task("clean-project-css", function(done) {
  let targetFolder = "static/css";
  log.info("Cleaning relevant CSSs in '" + targetFolder + "'");
  del(targetFolder + "/hyde-hyde.*");
  del(targetFolder + "/print.*");
  del(targetFolder + "/hugo-toc.*")
  done();
});

gulp.task("clean-dist", function(done) {
    let targetFolder = "dist";
    log.info("Cleaning '" + targetFolder + "'");
    del([targetFolder + "/**", "!" + targetFolder, "!" + targetFolder + "/.*"]);
    done();
});

gulp.task("copy-public-to-dist", function(done) {
  gulp
      .src(["public/**", "!public/.*"])
      //.pipe(using())
      .pipe(gulp.dest("dist")
      .on("end", done));
});

gulp.task("minify-resources", gulp.series(["copy-public-to-dist"], function(done) {
  let publicFolder = "./public";
  let html = publicFolder + "/**/*.html";
  let css = publicFolder + "/**/*.css";
  let js = publicFolder + "/**/*.js";
  let dest = "dist";
  log("Minifying HTML/CSS/JS in '" + publicFolder + "' to '" + dest + "'");
  gulp.src([html, css])
    //.pipe(using())
    .pipe(htmlmin({
      collapseWhitespace: true,
      keepClosingSlash: true,
      preserveLineBreaks: true,
      removeComments: true
    }))
    .pipe(gulp.dest(dest))
    .on("end", done);
}));

gulp.task(
  "watch",
  gulp.series("clean-project-css", "compile-scss", function(done) {
    gulp.watch(watchedResources, gulp.series("compile-scss"));
    done();
  })
);
