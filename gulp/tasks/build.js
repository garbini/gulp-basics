var gulp = require('gulp');

gulp.task('build', function () {

    gulp.start('compass', 'fonts');

});