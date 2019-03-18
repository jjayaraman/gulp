const {
    series
} = require('gulp');

function clean(cb) {
    console.log('clean');
    cb();
}

function build(cb) {
    console.log('build');
    cb();
}


exports.default = series(clean, build);