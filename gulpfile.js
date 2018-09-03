"use strict"

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      connect = require('gulp-connect'),
      autoprefixer = require('gulp-autoprefixer'),
      imagemin = require('gulp-imagemin');;


gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie 10'],
            cascade: false
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('js', function () {
    gulp.src(['src/js/*.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

gulp.task('img', () =>
	gulp.src('src/img/*')
		.pipe(imagemin())
        .pipe(gulp.dest('images'))
);


gulp.task('watch', function () {
    gulp.watch(['src/scss/**/*.scss', 'src/js/*.js'], ['sass', 'js']);
});


gulp.task('default', function () {
    gulp.run('watch');
});
