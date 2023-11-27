const { src, dest } = require("gulp");
const { sass } = require("./gulpfile");

// Funcion que compila SASS
function compilarSass() {
  return src("src/scss/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./build/css"));
}
