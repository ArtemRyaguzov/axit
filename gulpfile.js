const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');

// gulp.task = Define tasks
// gulp.src = Point to files to use
// gulp.dest = Points to folder to output
// gulp.watch = Watch files and folders for changes


// logs message
// USAGE:   gulp message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// USAGE:   gulp
// gulp.task('default', function(){
//   return console.log('Gulp is running...');
// });


// Copy HTML
// USAGE: gulp copy

gulp.task('copy', function(){
    gulp.src('src/html/*.html')
    .pipe(gulp.dest('dist'));
});


// Optimize Images and move them to the dist
// USAGE: gulp imageMin

gulp.task('imageMin', () =>
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);


//  Concatenate js files
// USAGE: gulp concat

gulp.task('concat', function(){
    gulp.src(['src/js/wow.js', 'src/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
});


// Compile SASS
// USAGE: gulp sass

gulp.task('sass', function(){
  gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
    // .pipe(gulp.watch('scss/*.scss'));
});


// DO ALL FUNCTIONS
// USAGE: gulp build

gulp.task('build', ['copy', 'imageMin', 'sass', 'concat']);



// Watching changes
// USAGE: gulp watch

gulp.task('watch', function(){
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['concat']);
  gulp.watch('src/html/*.html', ['copy']);
  gulp.watch('src/images/*', ['imageMin']);
});
