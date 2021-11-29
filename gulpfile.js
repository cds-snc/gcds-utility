'use strict';

const { src, dest } = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function compile() {
  return src('src/utilities.scss')
    .pipe(sass.sync())
    .pipe(dest('dist'));
}

module.exports = {
  compile
};