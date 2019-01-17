// including plugins
var gulp = require('gulp')
,minifyHtml = require("gulp-minify-html")
,cleanCSS = require('gulp-clean-css')
,uglify = require("gulp-uglify") 
,imagemin = require('gulp-imagemin')
,concat = require('gulp-concat');  ;
 
// minify HTML
gulp.task('minify-html',() =>{
   return gulp.src('src/index.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('.'));
});

// minify and concat CSS
gulp.task('minify-css', () =>{
    return gulp.src('src/static/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('.'));
});

// minify and concat JS
gulp.task('minify-js',() =>{
    return gulp.src('src/static/js/*.js') // path to your files
    .pipe(concat("script.js"))
    .pipe(gulp.dest('static/js/'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
});

// minify and concat DATA
gulp.task('minify-data', () => {
    return gulp.src('src/static/data/*.js') // path to your files
    .pipe(concat("data.js"))
    .pipe(gulp.dest('static/data/'))
    .pipe(uglify())
    .pipe(gulp.dest('static/data/'));
});

//minify IMAGES 
gulp.task("minify-img",() => {
    return gulp.src('src/static/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('static/img/'))
});

//task concat data and js
gulp.task("concat-data-js",() => {
    return gulp.src(["static/js/script.js","static/data/data.js"])
		.pipe(concat("scripts.js"))
		.pipe(gulp.dest('.'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));       
});



gulp.task('default', 
gulp.series('minify-html', 'minify-css',
  'minify-js' , 'minify-data',
  'minify-img' , 'concat-data-js',function(done){
      done()
  }));
