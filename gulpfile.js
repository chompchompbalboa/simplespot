// Shared dependencies
var gulp = require('gulp');
var uglify = require('gulp-uglify');

// Build dependencies
var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var collapse = require('bundle-collapser/plugin');
var reactify = require('reactify'); 
var source = require('vinyl-source-stream');

// Module dependencies
var fs = require('fs');
var jsonfile = require('jsonfile');
var simplespot = require('./build/simplespot');

// Babelify transform
var babelifyES6 = function(file) {
  return babelify(file, {presets: ["es2015", "react", "stage-0"]});
};

// Initialize the current build
var build = function(index, output) {
    if(process.env.NODE_ENV === 'dev') {
        build_dev(index, output);
    }
    else {
        build_prod(index, output);
    }
};

// Production builds
var build_prod = function(index, output) {
    browserify({
        entries: [index],
        transform: [babelifyES6],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: false 
    })
    .plugin(collapse)
    .bundle()
    .pipe(source(output))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'));
};

// Development builds
var build_dev = function(index, output) {
    browserify({
        entries: [index],
        transform: [babelifyES6],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    })
    .bundle()
    .pipe(source(output))
    .pipe(gulp.dest('./public/js/'));
};

// Build indexes
gulp.task('all', function() {
    //build('./app/React/index/Admin/admin-index.js', 'admin-index.js');
    build('./app/React/index/App/app-index.js', 'app-index.js');
    build('./app/React/index/Site/site-index.js', 'site-index.js');
    //simplespot.buildTasks(fs, jsonfile);
});
gulp.task('Admin', function() {build('./app/React/index/Admin/admin-index.js', 'admin-index.js')});
gulp.task('App', function() {build('./app/React/index/App/app-index.js', 'app-index.js')});
gulp.task('Site', function() {build('./app/React/index/Site/site-index.js', 'site-index.js')});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('./app/React/actions/*.js', ['all']);
    gulp.watch('./app/React/constants/*.js', ['all']);
    gulp.watch('./app/React/loader/**/*.js', ['all']);
    gulp.watch('./app/React/stores/*.js', ['all']);
    gulp.watch('./app/React/utils/**/*.js', ['all']);
    gulp.watch('./app/React/components/Modules/**/*.jsx', ['all']);
    //gulp.watch('./app/React/components/Modules/**/*.js', ['all']);
    //gulp.watch('./app/React/components/Modules/**/*.jsx', ['all']);
    gulp.watch('./app/React/components/Admin/**/*.js', ['all']);
    gulp.watch('./app/React/components/Admin/**/*.jsx', ['all']);
    gulp.watch('./app/React/components/App/**/*.js', ['all']);
    gulp.watch('./app/React/components/App/**/*.jsx', ['all']);
    gulp.watch('./app/React/components/Site/**/*.js', ['all']);
    gulp.watch('./app/React/components/Site/**/*.jsx', ['all']);
});

// Default tasks
gulp.task('default', ['all', 'watch']);