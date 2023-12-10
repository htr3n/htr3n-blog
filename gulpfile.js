const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const log = require("fancy-log");
const del = require("del");

gulp.task("clean-dist", function (done) {
  let targetFolder = "dist";
  log.info("Cleaning '" + targetFolder + "'");
  del([targetFolder + "/**", "!" + targetFolder, "!" + targetFolder + "/.*"]);
  done();
});

gulp.task("copy-public-to-dist", function (done) {
  gulp
  .src(["public/**", "!public/.*"])
  .pipe(gulp.dest("dist")
  .on("end", done));
});

gulp.task("copy-keybase-txt-to-dist", function (done) {
  gulp
  .src(["keybase.txt"])
  .pipe(gulp.dest("dist")
  .on("end", done));
});

gulp.task("minify-resources", gulp.series(["copy-public-to-dist"], function (done) {
  const publicFolder = "./public";
  const html = publicFolder + "/**/*.html";
  const css = publicFolder + "/**/*.css";
  const dest = "dist";
  log("Minifying HTML/CSS/JS in '" + publicFolder + "' to '" + dest + "'");
  gulp.src([html, css])
  .pipe(htmlmin({
    collapseWhitespace: true,
    keepClosingSlash: true,
    preserveLineBreaks: true,
    removeComments: true
  }))
  .pipe(gulp.dest(dest))
  .on("end", done);
}));
