import { dest, series, src, watch } from 'gulp';
import minify from 'gulp-clean-css';
import prefix from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import sassLib from 'sass';

// Use `sassLib` (default export from `sass`) in `gulp-sass`
const sass = gulpSass(sassLib);

// Compile + prefix SCSS
export function compileAndPrefix() {
  return src('src/gcds-utility.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(dest('dist'));
}

// Minify CSS
export function minifyCss() {
  return src('dist/gcds-utility.css')
    .pipe(minify())
    .pipe(rename('gcds-utility.min.css'))
    .pipe(dest('dist'));
}

// Watch SCSS for changes
export function watchTask() {
  watch(['src/*.scss', 'src/*/*.scss'], compileAndPrefix);
}

// Default gulp
export default series(compileAndPrefix, minifyCss, watchTask);

// Compile
export const compile = series(compileAndPrefix, minifyCss);

// Test
export const test = series(compileAndPrefix, minifyCss);
