var gulp         = require('gulp');
var compass      = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var errors       = require('../utils/errors');
var config       = require('../config').compass;

gulp.task('compass', function () {

    return gulp.src(config.src)
        .pipe(compass(config.settings))
        .on('error', errors)
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest(config.dest));

});