gulp = require 'gulp'
coffee = require 'gulp-coffee'
shell = require 'gulp-shell'
webpack = require 'gulp-webpack'
webpackConfig = require './webpack.config'

gulp.task 'default', ['build']
gulp.task 'build', ['coffee', 'jade', 'ts', 'webpack']

gulp.task 'coffee', ->
  gulp.src('app/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('.tmp'))

gulp.task 'jade', ->
  gulp.src('app/**/*.jade')
    .pipe(gulp.dest('.tmp'))

gulp.task 'ts', shell.task [
  'tsc -d -m commonjs -t es5 --sourceMap --outDir .tmp app/index.ts'
]

gulp.task 'webpack', ->
  gulp.src('.tmp/initialize.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('.'))

gulp.task 'watch', ['build'], ->
  gulp.watch 'app/**/*.coffee', ['coffee']
  gulp.watch 'app/**/*.ts', ['ts']
  gulp.watch 'app/**/*.jade', ['jade']
  gulp.watch '.tmp/**/*', ['webpack']

gulp.task 'deploy', shell.task [
  'git subtree push --prefix public/ origin gh-pages'
]
