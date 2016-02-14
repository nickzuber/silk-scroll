
var gulp = require('gulp');
var uglify = require('gulp-uglify'); // minify build files
var rename = require('gulp-rename'); // custom name for build
var browserify = require('gulp-browserify'); // compiles Needle module files
var header = require('gulp-header'); // custom comment header on build files

// Set banner for production file
var pkg = require('./package.json');
var banner = ['/*!',
  ' // silk-scroll v<%= pkg.version %> | <%= pkg.license %> ',
  ' // Copyright (c) 2015 <%= pkg.author %>',
  ' */',
  ''].join('\n');

// Contacat & compress javascript files
gulp.task('dispatch', function(){
    gulp.src(['src/*.js'])
    .pipe(browserify({}))
    //.pipe(uglify())
    .pipe(rename({
        basename: 'silk-scroll',
        extname: '.min.js'
    }))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('bin'))
    .pipe(gulp.dest('tests/scripts'));
});

// Set default to dispatch
gulp.task('default', ['dispatch']);
