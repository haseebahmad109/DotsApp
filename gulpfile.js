var gulp = require('gulp')
  , prefix = require('gulp-autoprefixer')

  , BASE_DIR = __dirname + '/src'
  , DEST = __dirname + '/dots/www'
  , ROOT = __dirname + '/dots'


gulp.task('copy', function () {
  gulp.src(BASE_DIR + '/img/**/*')
    .pipe(gulp.dest(DEST + '/img'))

  gulp.src(BASE_DIR + '/res/**/*')
    .pipe(gulp.dest(DEST + '/res'))

  gulp.src(BASE_DIR + '/config.xml')
    .pipe(gulp.dest(DEST + '/'))

  gulp.src(BASE_DIR + '/config.xml')
    .pipe(gulp.dest(ROOT))

  gulp.src(BASE_DIR + '/js/**/*.js')
    .pipe(gulp.dest(DEST + '/js'))

  gulp.src(BASE_DIR + '/css/**/*.css')
    .pipe(gulp.dest(DEST + '/css'))

  gulp.src(BASE_DIR + '/views/**/*.html')
    .pipe(gulp.dest(DEST + '/views'))

  gulp.src(BASE_DIR + '/index.html')
    .pipe(gulp.dest(DEST))
})

gulp.task('watch', function () {
  gulp.watch(BASE_DIR + '/css/**/*.css', ['copy'])
  gulp.watch(BASE_DIR + '/views/*.html', ['copy'])
  gulp.watch(BASE_DIR + '/js/**/*.js', ['copy'])
  gulp.watch(BASE_DIR + '/*.html', ['copy'])
});

gulp.task('default', ['copy', 'watch'])
gulp.task('build', ['copy'])