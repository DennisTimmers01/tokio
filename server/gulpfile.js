const gulp = require('gulp')
const babel = require('gulp-babel')
const nodemon = require('nodemon')

gulp.task('javascript', () =>
  gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
)

gulp.task('server', () =>
  nodemon({
    script: 'dist/index.js',
    ext: 'js',
    env: { PORT: 8000 },
    ignore: ['./node_modules/**']
  })
)

gulp.task('dev', ['javascript', 'server'], () =>
  gulp.watch('./src/**/*.js', ['javascript'])
)
