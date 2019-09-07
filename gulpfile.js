var gulp            = require('gulp'),
    concat          = require('gulp-concat'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    cssnano         = require('gulp-cssnano'),
    gcmq            = require('gulp-group-css-media-queries'),
    pug             = require('gulp-pug'),
    browserSync     = require('browser-sync'),
    webpack         = require('webpack'),
    webpackStream   = require('webpack-stream'),
    del             = require('del'),
    cache           = require('gulp-cache'),
    spritesmith     = require('gulp.spritesmith');

// ==========================================================

gulp.task('browser-sync', function() {
  browserSync({
    //  proxy: "www",
   server:{
     baseDir: 'app'
   },
    notify: false
  });
});

gulp.task('sass', function() {
  return gulp.src('app/sass/**/*.sass')
     .pipe(sass())
     .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
     .pipe(gcmq())
     .pipe(gulp.dest('app/css'))
     .pipe(browserSync.reload({stream: true}))
});

gulp.task('cssnano', ['sass'], function() {
    return gulp.src(['app/css/libs.css', 'app/css/main.css', 'app/css/preloader.css'])
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
});

gulp.task('preloader', function() {
  return gulp.src(['app/blocks/preloader/preloader.js'])
  .pipe(gulp.dest('app/js/'))
});

gulp.task('pug', function buildHTML() {
  return gulp.src('app/**/**/**/**/*.pug')
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('app/'))
});

gulp.task('scriptsAll', function () {
  return gulp.src('./app/js/collector/collector.js')
    .pipe(webpackStream({
      output: {
        filename: 'main.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('./app/js/'));
});

gulp.task('libsjs', function() {
  return gulp.src(['app/libs/jquery/jquery.min.js',
                   'app/libs/jquery/jquery.validate.min.js',
                   'app/libs/jquery/jquery.maskedinput.min.js'])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
});

gulp.task('minjs', function() {
  return gulp.src(['app/js/preloader.js', 'app/js/main.js'])
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/js'))
});

gulp.task('contentScriptsMin', function() {
  return gulp.src(['app/content/contacts/contacts.js',
                   'app/content/vacancies/vacancies.js',
                   'app/content/service/service.js',
                   'app/content/prices/prices.js',
                   'app/content/content-main/content-main.js'])
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('app/js/contentScripts'))
});


gulp.task('w', ['browser-sync', 
                'preloader', 
                'contentScriptsMin', 
                'scriptsAll', 
                'libsjs', 
                'minjs',
                'pug', 
                'cssnano'], function() {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/blocks/**/*.sass', ['sass']);
  gulp.watch('app/content/**/*.sass', ['sass']);
  gulp.watch('app/**/**/**/**/*.pug', ['pug']);
  gulp.watch('app/blocks/**/*.js', ['scriptsAll']);
  gulp.watch('app/content/**/*.js', ['scriptsAll']);
  gulp.watch('app/js/**/*.js', ['scriptsAll']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/content/**/*.js', browserSync.reload);
});

// =========================================================

gulp.task('del', function() {
  return del.sync('app/pages/**/*.html');
});

gulp.task('spr', function () {
  var spriteData = gulp.src('app/img/icons/common-ic/*.png').pipe(spritesmith({
    imgName: 'common-ic.png',
    cssName: 'common-ic-map.sass',
    algorithm: 'top-down'
  }));
  return spriteData.pipe(gulp.dest('app/css'));
});

// =========================================================


gulp.task('clean', function() {
  return del.sync('dist');
});



gulp.task('build', ['clean', 'sass', 'scriptsAll'],  function() {

  var buildIco = gulp.src([
    'app/favicons.ico'
  ])
  .pipe(gulp.dest('dist'));

  var buildJson = gulp.src([
    'app/json/**/*'
  ])
  .pipe(gulp.dest('dist/json'));

  var buildCss = gulp.src([
    'app/css/preloader.min.css', 
    'app/css/main.min.css', 
    'app/css/libs.min.css',
    'app/css/common-ic.png',
    'app/css/footer-ic.png'
  ])
  .pipe(gulp.dest('dist/css'));

  var buildImg = gulp.src('app/img/**/*')
  .pipe(gulp.dest('dist/img'));

  var buildFonts = gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'));

  var buildJs = gulp.src(['app/js/preloader.min.js',
                          'app/js/libs.min.js', 
                          'app/js/main.min.js'])
  .pipe(gulp.dest('dist/js'));

  var buildContentScripts = gulp.src(['app/js/contentScripts/*.js'])
  .pipe(gulp.dest('dist/js/contentScripts'));

  var buildHtml = gulp.src('app/*.html')
  .pipe(gulp.dest('dist'));
});

// ==============================================================
