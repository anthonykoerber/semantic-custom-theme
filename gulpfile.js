var gulp = require("gulp");
var iconfont = require("gulp-iconfont");
var runTimestamp = Math.round(Date.now() / 1000);

// TODO: change once this is working
var consolidate = require("gulp-consolidate");
var rename = require("gulp-rename");
var fontName = "symbols"; // set name of your symbol font
var className = "s"; // set class name in your CSS
var template = "template";

gulp.task("default", function() {
  // some stuff here
  console.log("default gulp task happened!");
});

gulp.task("fontbuild", function() {
  return gulp
    .src(["src/my-semantic-theme/assets/svg/*.svg"])
    .pipe(
      iconfont({
        fontName: "myFont",
        prependUnicode: true,
        formats: ["woff", "woff2"],
        timestamp: runTimestamp
      })
    )
    .on("glyphs", function(glyphs) {
      // more stuff
      console.log(glyphs);

      var options = {
        className,
        fontName,
        fontPath: "../fonts/", // set path to font (from your CSS file if relative)
        glyphs: glyphs.map(mapGlyphs)
      };

      gulp
        .src("src/my-semantic-theme/assets/templates/" + template + ".css")
        .pipe(consolidate("lodash", options))
        .pipe(rename({ basename: fontName }))
        .pipe(gulp.dest("src/my-semantic-theme/assets/css/"));
    })
    .pipe(gulp.dest("src/my-semantic-theme/assets/fonts/"));
});

/**
 * This is needed for mapping glyphs and codepoints.
 */
function mapGlyphs(glyph) {
  return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) };
}
