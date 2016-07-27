var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var proxyURL = "localhost"; /* Change to MAMP server */
var sassinput = './scss/*.scss';
var htmlinput = 'site/htdocs/site/templates/default_site/**/*.html'; /* Change to working directory */
var sassoutput = './css';

gulp.task('sass', function() {
    return gulp
        // Get all scss files in /scss
        .src(sassinput)
        // Run them thru sass
        .pipe(sass())
        // Output the to /css
        .pipe(gulp.dest(sassoutput))
        .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: proxyURL,
        open: false
    })
});

gulp.task('serve', ['sass', 'browser-sync'], function() {
        // Watch input folder for changes
        gulp.watch(sassinput, ['sass'])
        .on('change', function(event) {
            console.log(event.path + ' was ' + event.type + ', running tasks...');
        });
        gulp.watch(htmlinput).on('change', function(event) {
            console.log(event.path + ' was ' + event.type + ', running tasks...');
            browserSync.reload({ stream: false });
        });
        // Log a message in the console on change
});

gulp.task('default', ['serve']);