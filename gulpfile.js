const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

function buildJs() {
  return gulp.src('./js/*.js') //это папка где у вас лежат js файлы
    .pipe(sourcemaps.init())
    .pipe(concat('app.js')) //это как будет называться собранный файл
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/')); //папка куда будем складывать наш файл
}

gulp.task('js-min', function () {
  gulp.src('dist/*.js')
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist'));
});
 
gulp.watch('./src/*.js', buildJs);

exports.default = buildJs;