'use strict';
var gulp = require('gulp');
// var ngHtml2Js = require('gulp-ng-html2js');
// var minifyHtml = require('gulp-minify-html');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var injectHtml = require('gulp-inject-stringified-html');
var ngannotate = require('gulp-ng-annotate');

gulp.task('optimize', function(done) {
    gulp.src(['./www/src/components/ionic-menu-multilevel/*.*.js', './www/src/components/ionic-menu-multilevel/*.js'])
        .pipe(ngannotate({gulpWarnings: false}))
        .pipe(concat('ionic-menu.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./www/partials'));

});
