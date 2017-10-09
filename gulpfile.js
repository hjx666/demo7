/**
 * Created by Enter on 2017-10-09.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var minCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('css',function(){
    gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(minCss())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('js',function(){
    gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./js/'));
});