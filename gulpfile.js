
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');




// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    // Watch .js files
    gulp.watch('./js/project/*.js', ['scripts']);
     // Watch .scss files
    gulp.watch('./scss/*.scss', ['sass']);

    gulp.watch("*.html").on('change', browserSync.reload);
});


// Concatenate JS Files
gulp.task('scripts', function() {
   return gulp.src('./js/project/*.js')
     .pipe(concat('main.js'))
     .pipe(gulp.dest('bundle'))
     .pipe(browserSync.stream());
});


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("bundle"))
        .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);




// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var sass = require('gulp-sass');

//  // Concatenate JS Files
// gulp.task('scripts', function() {
//     return gulp.src('./js/project/*.js')
//       .pipe(concat('main.js'))
//       .pipe(gulp.dest('bundle'));
// });
//
//
// gulp.task('sass', function () {
//   return gulp.src('./scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('bundle'));
// });
//
// // Watch for changes in files
// gulp.task('watch', function() {
//   // Watch .js files
//   gulp.watch('./js/project/*.js', ['scripts']);
//    // Watch .scss files
//   gulp.watch('./scss/*.scss', ['sass']);
//  });
//
//
//
//
//
// // Default Task
// gulp.task('default', ['scripts', 'sass', 'watch']);
//








// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var sass = require('gulp-sass');
//
//
//  // Concatenate  JS
// gulp.task('scripts', function() {
//     return gulp.src('./js/project/*.js')
//       .pipe(concat('main.js'))
//         .pipe(gulp.dest('bundle'));
// });
//
//
//  // Compile CSS from Sass files
//   gulp.task('sass', function () {
//    return gulp.src('./sass/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('bundle'));
//   });
//
//
//  // Watch for changes in files
// gulp.task('watch', function() {
//    // Watch .js files
//   gulp.watch('./js/project/*.js', ['scripts']);
//    // Watch .scss files
//   gulp.watch('./scss/*.scss', ['sass']);
//  });
//
//
//  // Default Task
// gulp.task('default', ['scripts', 'sass', 'watch']);
