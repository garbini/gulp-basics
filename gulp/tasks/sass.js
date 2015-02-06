var gulp         = require('gulp');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var config       = require('../config').sass;
var errors       = require('../utils/errors');

gulp.task('sass', function () {

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .on('error', errors)
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest(config.dest));

});