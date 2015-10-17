var gulp = require('gulp');
var react = require('gulp-react');
var webpack = require('gulp-webpack');
var clean = require('gulp-clean');


gulp.task('jsx', function () {
  return gulp.src('src/*.jsx')
             .pipe(react())
             .pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['jsx'], function () {
  return gulp.src('dist/*.js')
             .pipe(webpack({
               output: {
                 filename: 'bundle/bundle.js'
               }
             }))
             .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  gulp.src('dist', {read: false})
      .pipe(clean());
});

gulp.task('default', ['bundle']);

