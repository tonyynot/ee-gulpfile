/**
 * This example:
 *  Uses the built-in BrowserSync server for HTML files
 *  Watches & compiles SASS files
 *  Watches & injects CSS files
 *
 * More details: http://www.browsersync.io/docs/gulp/
 *
 * Install:
 * npm install browser-sync gulp gulp-sass --save-dev
 *
 * Then run it with:
 * gulp
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Browser-sync task, only cares about compiled CSS
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        proxy: "-----"
    });

    gulp.watch("./htdocs/scss/*.scss", ['sass']);
    gulp.watch("./htdocs/system/user/templates/daily_bible/**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./htdocs/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("htdocs/css"))
        .pipe(browserSync.stream());
});

<<<<<<< HEAD
// Default task to be run with `gulp`
// This default task will run BrowserSync & then use Gulp to watch files.
// When a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('css/*.css', function (file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch("../*.html", ['bs-reload']);
});
=======
gulp.task('default', ['serve']);
>>>>>>> 70aac188c3c4bac7069b4f0758412d84d21186bf
