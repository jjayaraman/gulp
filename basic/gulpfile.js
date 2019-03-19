const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

function uglifyJS(cb) {
    return src('src/js/**/*.js').pipe(uglify()).pipe(dest('dist'));
}

function compileScss() {
    return src('src/scss/**/*.scss').pipe(sass()).pipe(dest('src/css'))
}

console.log(process.env.NODE_ENV);

exports.default = series(uglifyJS, compileScss);