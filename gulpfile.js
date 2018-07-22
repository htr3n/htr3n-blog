const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps    = require('gulp-sourcemaps');
const log = require('fancy-log');

const sassSourceFile = 'themes/hyde-hyde/static-src/scss/hyde-hyde.scss';
const watchedResources = 'themes/hyde-hyde/static-src/scss/**/*';

gulp.task('scss', function (done) {
  let outputFolder = 'themes/hyde-hyde/static/css';
  gulp.src(sassSourceFile)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(err){
      log.error(err.message);
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(outputFolder))
    .on('end', done);
});

gulp.task('watch', gulp.series('scss', function (done) {
  let del = require('del');
  let targetFolder = 'static/css';
  log.info('Cleaning relevant CSSs in \'' + targetFolder + '\' before watching ...');
  // remove CSSs in 'static'
  del(targetFolder + '/hyde-hyde.*');
  gulp.watch(watchedResources, gulp.parallel('scss'));
  done();
}));

gulp.task('release', function(done){
  let themeOutputFolder = 'themes/hyde-hyde/static/css';
  log('Compiling SCSSs to \'' + themeOutputFolder + '\'');
  gulp.src(sassSourceFile)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(err){
      log.error(err.message);
    }))
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(themeOutputFolder))
    .on('end', done);
});

gulp.task('deploy', function(done){
  let outputFolder = 'static/css';
  log('Compiling SCSSs to \'' + outputFolder + '\'');
  gulp.src(sassSourceFile)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', function(err){
      log.error(err.message);
    }))
    .pipe(postcss([autoprefixer, cssnano]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(outputFolder))
    .on('end', done);
});

gulp.task('default', gulp.series('watch', function () {}));
