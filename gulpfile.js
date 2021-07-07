const gulp = require("gulp"),
  fileInclude = require("gulp-file-include"),
  sass = require('gulp-sass'),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  concat = require("gulp-concat"),
  sourcemaps = require("gulp-sourcemaps"),
  cleanCSS = require("gulp-clean-css"),
  gcmq = require("gulp-group-css-media-queries"),
  browserSync = require("browser-sync"),
  uglify = require("gulp-uglify-es").default,
  babel = require("gulp-babel"),
  imagemin = require("gulp-imagemin"),
  webp = require("gulp-webp"),
  webphtml = require("gulp-webp-html"),
  webpcss = require("gulp-webpcss"),
  svgSprite = require("gulp-svg-sprite"),
  cheerio = require("gulp-cheerio"),
  cache = require("gulp-cache"),
  del = require("del");

gulp.task("browser-sync", function () {
  browserSync({
    server: {
      baseDir: "dist/",
    },
    notify: true,
    open: true,
  });
});

gulp.task("html", function () {
  return gulp
    .src(["src/html/**/*.html", "!src/html/**/_*.html"])
    .pipe(fileInclude())
    .pipe(webphtml())
    .pipe(gulp.dest("dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("sass", function () {
  return gulp
    .src(["src/sass/*.sass"])
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer(["last 5 versions"], {
        cascade: true,
      })
    )

    .pipe(gcmq("main.min.css"))
    .pipe(concat("main.min.css"))
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    // .pipe(sourcemaps.write())
    .pipe(
      webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp",
      })
    )
    .pipe(gulp.dest("dist/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("js", function () {
  return gulp
    .src([
      // js libs uncomment what you need
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/slick-carousel/slick/slick.min.js",
      "node_modules/svg4everybody/dist/svg4everybody.min.js",
      "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js",
      "node_modules/odometer/odometer.min.js",

      // "node_modules/jquery-nice-select/js/jquery.nice-select.min.js",
      // "src/libs/datepicker/dist/js/datepicker-full.min.js",
      "src/libs/bootstrap-4.6.0/dist/js/bootstrap.min.js",

      "src/js/script.js",
    ])
    // .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat("script.min.js"))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/js"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("files", function () {
  return gulp
    .src("src/*.*")
    .pipe(gulp.dest("dist"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("images", function () {
  return (
    gulp
    .src("src/img/**/*")
    // Caching images that ran through imagemin
    .pipe(
      cache(
        imagemin({
          interlaced: true,
        })
      )
    )
    .pipe(gulp.dest("dist/img"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
  );
});

gulp.task("webp", function () {
  return gulp
    .src("src/img/**/*.*")
    .pipe(
      webp({
        quality: 70,
      })
    )
    .pipe(gulp.dest("dist/img/"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("svgSprite", function () {
  return gulp
    .src("src/img/svg/*.svg") // svg files for sprite
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg", //sprite file name
          },
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
          $("[class]").removeAttr("class");
          $("[width]").removeAttr("width");
          $("[height]").removeAttr("height");
          $("style").remove();
        },
        parserOptions: {
          xmlMode: true,
        },
      })
    )
    .pipe(gulp.dest("dist/img/svg/sprite-svg/"));
});

gulp.task("fonts", function () {
  return gulp
    .src("src/fonts/**/*")
    .pipe(gulp.dest("dist/fonts"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("watch", function () {
  gulp.watch("src/html/**/*.html", gulp.parallel("html"));
  gulp.watch("src/sass/**/*.sass", gulp.parallel("sass"));
  gulp.watch("src/libs/bootstrap-4.6.0/scss/*.scss", gulp.parallel("sass"));

  gulp.watch("src/js/script.js", gulp.parallel("js"));
  gulp.watch("src/*.*", gulp.parallel("files"));
  gulp.watch("src/fonts/**/*", gulp.parallel("fonts"));
  gulp.watch("src/img/**/*", gulp.parallel("images"));
  gulp.watch("src/img/svg/*.svg", gulp.parallel("svgSprite"));

});

gulp.task("clear", function () {
  return cache.clearAll();
});

gulp.task("remove-build", function () {
  return del("dist");
});

gulp.task(
  "default",
  gulp.parallel(
    "watch",
    "html",
    "sass",
    "js",
    "fonts",
    "images",
    "webp",
    "files",
    "svgSprite",
    "browser-sync"
  )
);

// npm install webp-converter@2.2.3 --save-dev