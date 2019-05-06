// load modules
const gulp = require('gulp');
const del = require('del');
const browsersync_server = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');

 
// declare functions
// delete all assets in dist
function cleanAssets(done) {
    return del(
        ['dist/**/*.html', 'dist/fonts/**/*', 'dist/img/**/*'], 
        { force: true }
    );
}
 
// publish HTML files src into dist
function publishHtml(done) {
    return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
  }
 
// Copy all fonts from src/fonts into dist
function publishFonts(done) {
    return gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));
}
 
// Copy all images from src/img into dist
function publishImages(done) {
  return gulp.src('src/img/**/*')
    .pipe(gulp.dest('dist/img'));
}

// watch files
function watchFiles(done) {
    gulp.watch("src/**/*.html", gulp.series(publishHtml, reload));
    gulp.watch("src/scss/**/*.scss", gulp.series(compileScss, reload));
}




// browserSync server
function serve(done) {
    browsersync_server.init({
        server: {
            baseDir: './dist/'
        }
    });
    done();
}

function reload(done) {
    browsersync_server.reload();
    done();
}

/// compile SCSS files
function compileScss(done) {
    return gulp.src('src/scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(sass().on('error', sass.logError))
      .pipe(csso())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'));
}
  

 
// define complex tasks
 
// export tasks

exports.publish = gulp.series(cleanAssets, publishHtml, publishFonts, publishImages);
exports.watch = gulp.series(cleanAssets, publishHtml, compileScss, publishFonts, publishImages, serve, watchFiles);
