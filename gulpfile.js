//puedo utilizar series o parallel

// function css(done) {
//   console.log("compilando....SASS");
//   done();
// }

// function javascript(done) {
//   console.log("compilando JavaScript");
//   done();
// }
// function minificarHTML(done) {
//   console.log("minificando...");
//   done();
// }

// exports.hola = css;
// exports.javascript = javascript;
// exports.tareas = series(css, javascript, minificarHTML);
// // exports.default y en la terminal solo pongo gulp de esa manera lo que este asociado a ese default lo ejecuta

const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minifyCSS = require("gulp-clean-css");
const { compileString } = require("sass");

{
  function css() {
    return src("src/scss/app.scss")
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(dest("./build/css"));
  }

  function minificarcss() {
    return src("src/scss/app.scss")
      .pipe(
        sass({
          outputStyle: "compressed",
        })
      )
      .pipe(minifyCSS())
      .pipe(dest("./build/css"));
  }

  function watchArchivo() {
    watch("src/scss/**/*.scss", css); // * = La carpeta actual - ** = Todos los archivos con esa extencion
  }

  exports.css = css;
  exports.minificarcss = minificarcss;
  exports.watchArchivo = watchArchivo;
}
