var gulp = require('gulp');
var del = require('del');
var concat = require("gulp-concat");
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var stripDebug = require('gulp-strip-debug');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(ngAnnotate())
    .pipe(stripDebug())
    .pipe(concat('ion-google-autocomplete.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);