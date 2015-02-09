var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', function () {

    gulp.watch(config.compass.src, ['compass']);
    gulp.watch(config.fonts.src, ['fonts']);

});