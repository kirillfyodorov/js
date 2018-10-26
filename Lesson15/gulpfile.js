var gulp = require('gulp')
var bs = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html-2');
var plumber = require('gulp-plumber');
var fontmin = require('gulp-fontmin');
var cleanCSS = require('gulp-clean-css');
var webpack = require('webpack');
var gutil = require('gulp-util');
var notifier = require('node-notifier');

let webpackConfig = require('./webpack.config.js');
let statsLog = { // для красивых логов в консоли
    colors: true,
    reasons: true
};

gulp.task('scripts', (done) => {
    // run webpack
    webpack(webpackConfig, onComplete);

    function onComplete(error, stats) {
        if (error) { // кажется еще не сталкивался с этой ошибкой
            onError(error);
        } else if (stats.hasErrors()) { // ошибки в самой сборке, к примеру "не удалось найти модуль по заданному пути"
            onError(stats.toString(statsLog));
        } else {
            onSuccess(stats.toString(statsLog));
        }
    }

    function onError(error) {
        let formatedError = new gutil.PluginError('webpack', error);
        notifier.notify({ // чисто чтобы сразу узнать об ошибке
            title: `Error: ${formatedError.plugin}`,
            message: formatedError.message
        });
        done(formatedError);
    }

    function onSuccess(detailInfo) {
        gutil.log('[webpack]', detailInfo);
        done();
    }
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    bs.init({
        server: "./src"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', bs.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/sass/*.sass")
        .pipe(sass())
        .pipe(plumber())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest("src/css"))
        .pipe(bs.stream());
});

gulp.task('default', ['serve']);

gulp.task('minify', function(){
    gulp.src('src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'));
    gulp.src('src/*.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('./dist/'));
    gulp.src('src/img/*')
        .pipe(gulp.dest('dist/images'));
    gulp.src('src/fonts/*')
    	.pipe(fontmin())
        .pipe(gulp.dest('dist/fonts'));
});