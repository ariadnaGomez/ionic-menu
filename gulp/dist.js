'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngannotate = require('gulp-ng-annotate'),
    embedTemplates = require('gulp-angular-embed-templates'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean');

gulp.task('clean', function () {
    gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('component-optimize', function(done) {
    gulp.src(['./www/src/components/ionic-menu/*.*.js', './www/src/components/ionic-menu/*.js'])
        .pipe(ngannotate({gulpWarnings: false}))
        .pipe(embedTemplates({basePath: 'www/'}))
        .pipe(concat('ionic-menu.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./dist'))
        .on('end', done);

});

gulp.task('component-sass', function(done) {
  gulp.src('./www/src/components/ionic-menu/ionic-menu.scss')
    .pipe(sass({
      errLogToConsole: true,
      style: 'expanded',
      sourceComments: 'normal'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist'))
    .on('end', done);
});

gulp.task('dist', ['clean', 'component-optimize', 'component-sass']);
