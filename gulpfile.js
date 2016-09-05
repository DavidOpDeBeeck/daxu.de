var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var gulpNgConfig = require('gulp-ng-config');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var flatten = require('gulp-flatten');

// CLEAN

gulp.task('clean-js', () => {
  return gulp
    .src('./assets/js/app.js', { read: false })
    .pipe(clean());
});

gulp.task('clean-css', () => {
  return gulp
    .src('./assets/css/app.css', { read: false })
    .pipe(clean());
});

gulp.task('clean-html', () => {
  return gulp
    .src('./assets/templates', { read: false })
    .pipe(clean());
});

gulp.task('clean', ['clean-js', 'clean-css', 'clean-html']);

// MAIN

gulp.task('config', ['clean'], () => {
  return gulp
    .src('config.json')
    .pipe(gulpNgConfig('daxude.config', { createModule: false }))
    .pipe(gulp.dest('./app/config/'))
});

gulp.task('concat-js', ['clean'], () => {
  return gulp
    .src([ './app/app.*.js','./app/**/*.js' ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('concat-css', ['clean'], () => {
  return gulp
    .src('./app/**/*.scss')
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('move-html', ['clean-html'], () => {
  return gulp
    .src('./app/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('./assets/templates'));
});

gulp.task('sass', ['clean-css', 'concat-css'], () => {
  return gulp
    .src('./assets/css/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('babel', ['clean-js', 'concat-js'], () => {
  return gulp
    .src('./assets/js/app.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('assets/js/'));
});

// WATCHERS

gulp.task('sass:watch', () => {
  gulp.watch('./app/**/*.scss', ['sass']);
});

gulp.task('babel:watch', () => {
  gulp.watch('./app/**/*.js', ['babel']);
});

gulp.task('template:watch', () => {
  gulp.watch('./app/**/*.html', ['move-html']);
});

gulp.task('default', ['clean', 'config', 'concat-js', 'concat-css', 'move-html', 'sass', 'babel']);
gulp.task('watch', ['clean', 'sass:watch', 'babel:watch', 'template:watch']);
