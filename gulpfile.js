var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var gulpNgConfig = require('gulp-ng-config');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var flatten = require('gulp-flatten');

gulp.task('clean', function () {
  return gulp
    .src([ './assets/js/app.js', './assets/css/app.css', './assets/templates' ], { read: false })
    .pipe(clean());
});

gulp.task('config', ['clean'], function () {
  return gulp
    .src('config.json')
    .pipe(gulpNgConfig('daxude.config'))
    .pipe(gulp.dest('./app/config/'))
});

gulp.task('concat-js', ['clean'], function() {
  return gulp
    .src([ './app/app.*.js','./app/**/*.js' ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('concat-css', ['clean'], function() {
  return gulp
    .src('./app/**/*.scss')
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('move-html', ['clean'], function() {
  return gulp
    .src("./app/**/*.html")
    .pipe(flatten())
    .pipe(gulp.dest('./assets/templates'));
});

gulp.task('sass', ['clean', 'concat-css'], function () {
  return gulp
    .src('./assets/css/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

//gulp.task('sass:watch', function () {
//  gulp.watch('./sass/**/*.scss', ['sass']);
//});

gulp.task('babel', ['clean', 'concat-js'], function () {
    return gulp
        .src('./assets/js/app.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(gulp.dest('assets/js/'));
});

gulp.task('default', ['clean', 'config', 'concat-js', 'concat-css', 'move-html', 'sass', 'babel']);
