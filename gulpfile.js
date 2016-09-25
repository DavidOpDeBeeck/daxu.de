var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var gulpNgConfig = require('gulp-ng-config');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var flatten = require('gulp-flatten');
var mainBowerFiles = require('main-bower-files');
var minify = require('gulp-minify');

// CLEAN

function cleanAssetsDirectory() {
  return gulp
    .src(['./assets/js', './assets/css', './assets/templates'], { read: false })
    .pipe(clean());
}

// BOWER

function copyBowerLibs() {
  return gulp
    .src(mainBowerFiles())
    .pipe(gulp.dest('./lib/'));
}

function installBowerLibs() {
  return gulp
    .src(['./lib/angular.js',
      './lib/Chart.js',
      './lib/*.js'])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('./assets/js/'));
}

// APP

function installConfig() {
  return gulp
    .src('config.json')
    .pipe(gulpNgConfig('daxude.config', { createModule: false }))
    .pipe(gulp.dest('./app/config/'));
}

function concatJS() {
  return gulp
    .src([ './app/app.*.js','./app/**/*.js' ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./assets/js/'));
}

function concatCSS() {
  return gulp
    .src(['./app/**/_*.scss', './app/**/*.scss'])
    .pipe(concat('app.scss'))
    .pipe(gulp.dest('./assets/css/'));
}

function moveTemplates() {
  return gulp
    .src('./app/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('./assets/templates'));
}

function sassCSS(){
  return gulp
    .src('./assets/css/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(gulp.dest('./assets/css/'));
}

function babelJS(){
  return gulp
    .src('./assets/js/app.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('assets/js/'));
}

function cleanLeftOvers(){
  return gulp
    .src(['./assets/css/app.scss'], { read: false })
    .pipe(clean());
}

// TASKS

gulp.task('clean', cleanAssetsDirectory);

gulp.task('bower', ['clean', 'bower-copy', 'bower-install']);
gulp.task('bower-copy', ['clean'], copyBowerLibs);
gulp.task('bower-install', ['bower-copy'], installBowerLibs);

gulp.task('app', ['bower', 'app-install', 'app-sass', 'app-babel']);

gulp.task('app-install', ['clean', 'app-install-config', 'app-concat-js', 'app-concat-css', 'app-move-templates']);

gulp.task('app-install-config', installConfig);
gulp.task('app-concat-js', ['clean'], concatJS);
gulp.task('app-concat-css', ['clean'], concatCSS);
gulp.task('app-move-templates', ['clean'], moveTemplates);

gulp.task('app-sass', ['app-concat-css'], sassCSS);
gulp.task('app-babel', ['app-concat-js'], babelJS);

// MAIN

gulp.task('dev', ['clean', 'bower', 'app'], () => {
  gulp.watch('./app/**/*.scss', ['app-sass']);
  gulp.watch('./app/**/*.js', ['app-babel']);
  gulp.watch('./app/**/*.html', ['move-templates']);
});

gulp.task('deploy', ['bower', 'app'], cleanLeftOvers);
