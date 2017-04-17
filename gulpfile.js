// including plugins
var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html")
,minifyCss = require("gulp-minify-css")
,uglify = require("gulp-uglify") 
, imagemin = require('gulp-imagemin');
 
// task
gulp.task('minify-html',() =>{
    gulp.src('src/index.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest(''));
});

// task
gulp.task('minify-css', () =>{
    gulp.src('src/static/css/*.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('static/css/'));
});

// task
gulp.task('minify-js',() =>{
    gulp.src('src/static/js/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
});

// task
gulp.task('minify-data', () => {
    gulp.src('src/static/data/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('static/data/'));
});

//task 
gulp.task("minify-img",() => {
    gulp.src('src/static/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('static/img'))
});



gulp.task('default', 
['minify-html', 'minify-css',
  'minify-js' , 'minify-data',
  'minify-img']);