const { dest, series, src, watch } = require('gulp');
const minify = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

// Compile + prefix SCSS
function compileAndPrefix() {
  return src('src/utilities.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(dest('dist'))
};

// Minify CSS
function minifyCss() {
  return src('dist/utilities.css')
    .pipe(minify())
    .pipe(rename('utilities.min.css'))
    .pipe(dest('dist'))
};

// Watch SCSS for changes
function watchTask() {
  watch(['src/*.scss', 'src/*/*.scss'], compileAndPrefix);
}

// Default gulp
exports.default = series(
  compileAndPrefix,
  minifyCss,
  watchTask
);

// Compile
exports.compile = series(
  compileAndPrefix,
  minifyCss
);

// Test
exports.test = series(
  compileAndPrefix,
  minifyCss
);
