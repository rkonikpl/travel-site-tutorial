var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync").create();


gulp.task('watch', function () {

    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    watch('./app/index.html', function () {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start('cssInject');
    })
});

/**
 * Wykona to zadanie po zakończeniu zadania w nawiasie kwadratowym
 * w tym wypadku 'style'
 */
gulp.task("cssInject", ['styles'], function() {
    return gulp.src("./app/assets/styles/style.css")
        .pipe(browserSync.stream());
});