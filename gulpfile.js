var gulp = require("gulp");
var bs = require("browser-sync").create();
// var brows = require("browser-sync");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var typescript = require("gulp-typescript");
var include = require("gulp-include");
var autoprefixer = require("gulp-autoprefixer");
var uglify = require("gulp-uglify");
var flatten = require('gulp-flatten'); //Sacar solo archivos que estan en distintas carpetas
var htmlmin = require('gulp-htmlmin');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var gls = require('gulp-live-server');

//DESTINACION GENERAL
var dir = "./source/**/*.";
var pages = "./source/pages/**/*.";

//TAREAS
gulp.task('jade', function () {
  gulp.src(["!./source/pages/admin/{articulo,notification,socio}/*.jade",pages + "jade"])
    .pipe(plumber())
    .pipe(jade())
    .pipe(flatten())
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./site/'))
});

gulp.task('sass', function () {
  gulp.src(["!./source/pages/admin/{articulo,notification,socio}/*.sass",pages + "sass"])
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(flatten())
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./site/css/'))
    .pipe(bs.stream());
});

gulp.task("typescript", function () {  
  gulp.src(["!./source/pages/admin/{articulo,notification,socio}/*.ts",pages + "ts"])
    .pipe(plumber())
    .pipe(include())
    .pipe(typescript())
    .pipe(flatten())
    .pipe(uglify())
    .pipe(gulp.dest("./site/js/"))
    .pipe(bs.stream());
})

gulp.task('watch', ['browser-sync', 'server'], function () {
  gulp.watch(dir + 'jade', ['jade']);
  gulp.watch(dir + 'sass', ['sass']);
  gulp.watch(dir + 'ts', ['typescript']);
  gulp.watch('./source/api/**/*.php', ['copy-api']);
  gulp.watch(dir + 'hbs', ['copy-templates']);
  gulp.watch('./source/images/**', ['copy-images']);
});

gulp.task('copy-dependency', function () {
  var dir = "./site/dependencies/";
  gulp.src(['!./bower_components/bootstrap/dist/**/*-theme.min.css', './bower_components/bootstrap/dist/**/*.{min.js,min.css}'])
    .pipe(flatten())
    .pipe(gulp.dest(dir))
  gulp.src('./bower_components/jquery/dist/*.min.js')
    .pipe(flatten())
    .pipe(gulp.dest(dir))
  gulp.src('./bower_components/font-awesome/css/*.min.css')
    .pipe(flatten())
    .pipe(gulp.dest(dir))
});

gulp.task('copy-api', function () {
  gulp.src('./source/api/**')
    .pipe(gulp.dest('./site/api/'))
});

gulp.task('copy-templates', function () {
  gulp.src('./source/**/*.hbs')
    .pipe(plumber())
    .pipe(flatten())
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./site/templates/'))
});

gulp.task('copy-images', function () {
  gulp.src('./source/images/**')
    .pipe(gulp.dest('./site/img/'))
});

gulp.task('copy', ['copy-templates', 'copy-images', 'copy-api', 'copy-dependency']);

gulp.task('browser-sync', function () {
  // brows({
  //   server:{
  //     baseDir:"site"
  //   }
  // })
  bs.init({
    proxy: {
      target: "http://localhost:80"
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0'
      }
    }
  });
});
gulp.task("default", ['copy', 'jade', 'sass', 'typescript', 'watch']);

gulp.task('server', function() {
    var server=gls.static("site", 80);
    server.start();
});