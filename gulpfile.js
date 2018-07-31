const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const htmlmin = require("gulp-htmlmin");
const log = require("fancy-log");
const del = require("del");

const sassSourceFile = "themes/hyde-hyde/static-src/scss/hyde-hyde.scss";
const watchedResources = "themes/hyde-hyde/static-src/scss/**/*";

gulp.task("clean-project-css", function(done) {
  let targetFolder = "static/css";
  log.info("Cleaning relevant CSSs in '" + targetFolder + "'");
  del(targetFolder + "/hyde-hyde.*")
  done();
});

gulp.task("clean-dist", function(done) {
    let targetFolder = "dist";
    log.info("Cleaning '" + targetFolder + "'");
    del([targetFolder + "/**", "!" + targetFolder, "!" + targetFolder + "/.*"]);
    done();
  });
  
gulp.task("compile-scss", function(done) {
  let themeOutputFolder = "themes/hyde-hyde/static/css";
  log("Compiling SCSSs to '" + themeOutputFolder + "'");
  gulp
    .src(sassSourceFile)
    .pipe(sourcemaps.init())
    .pipe(
      sass().on("error", function(err) {
        log.error(err.message);
      })
    )
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(themeOutputFolder))
    .on("end", done);
});

gulp.task(
  "watch",
  gulp.series("clean-project-css", "compile-scss", function(done) {
    gulp.watch(watchedResources, gulp.series("compile-scss"));
    done();
  })
);

gulp.task("minify-scss", gulp.series("clean-project-css", function(done) {
  let cssOutputFolder = "static/css";
  log("Compiling SCSSs to '" + cssOutputFolder + "'");
  gulp
    .src(sassSourceFile)
    .pipe(sourcemaps.init())
    .pipe(
      sass().on("error", function(err) {
        log.error(err.message);
      })
    )
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(cssOutputFolder))
    .on("end", done);
}));

gulp.task("copy-public-to-dist", function(done) {
    gulp
        .src(["public/**", "!public/.*"])
        .pipe(gulp.dest("dist")
        .on("end", done));
});
  
gulp.task("minify-resources", gulp.series(["clean-dist", "copy-public-to-dist"], function(done) {
  let publicFolder = "./public";
  let html = publicFolder + "/**/*ml";
  let css = publicFolder + "/**/*.css";
  let js = publicFolder + "/**/*.js";
  let dest = "dist";
  log("Minifying HTML/CSS/JS in '" + publicFolder + "' to '" + dest + "'");
  gulp.src([html, css, js])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(dest))
    .on("end", done);
}));

