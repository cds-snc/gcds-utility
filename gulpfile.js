import { dest, series, src, watch } from 'gulp';
import minify from 'gulp-clean-css';
import prefix from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import * as sassLib from 'sass';

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

// Copy assets from src/assets to dist/assets
export function copyAssets() {
  return src('src/assets/**/*')
    .pipe(dest('dist/assets'));
}

// Watch SCSS for changes
export function watchTask() {
  watch(['src/*.scss', 'src/*/*.scss'], compileAndPrefix);
  watch('src/assets/**/*', copyAssets);
}

// Default gulp
export default series(compileAndPrefix, minifyCss, copyAssets, watchTask);

// Compile
export const compile = series(compileAndPrefix, minifyCss, copyAssets);

// Test
export const test = series(compileAndPrefix, minifyCss, copyAssets);
