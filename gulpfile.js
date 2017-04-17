// including plugins
var gulp = require('gulp')
,minifyHtml = require("gulp-minify-html")
,minifyCss = require("gulp-minify-css")
,uglify = require("gulp-uglify") 
,imagemin = require('gulp-imagemin')
,concat = require('gulp-concat');  ;
 
// task
gulp.task('minify-html',() =>{
    gulp.src('src/index.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest(''));
});

// task
gulp.task('minify-css', () =>{
    gulp.src('src/static/css/*.css') // path to your file
    .pipe(concat("style.css"))
    .pipe(gulp.dest('static/css/'))
    .pipe(minifyCss())
    .pipe(gulp.dest('static/css/'));
});

// task
gulp.task('minify-js',() =>{
    gulp.src('src/static/js/*.js') // path to your files
    .pipe(concat("script.js"))
    .pipe(gulp.dest('static/js/'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
});

// task
gulp.task('minify-data', () => {
    gulp.src('src/static/data/*.js') // path to your files
    .pipe(concat("data.js"))
    .pipe(gulp.dest('static/data/'))
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