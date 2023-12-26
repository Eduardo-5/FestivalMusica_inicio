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
const imagemin = require("gulp-imagemin");
const notify = require("gulp-notify");
const webp = require("gulp-webp");

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

function imagenes() {
  return src("src/img/**/*")
    .pipe(imagemin())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Imagen Minificada" }));
}

function versionWebp() {
  return src("src/img/**/*")
    .pipe(webp())
    .pipe(dest("./build/img"))
    .pipe(notify({ message: "Version webP lista" }));
}

function watchArchivo() {
  watch("src/scss/**/*.scss", css); // * = La carpeta actual - ** = Todos los archivos con esa extencion
}

exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivo = watchArchivo;
exports.versionWebp = versionWebp;

exports.default = series(css, imagenes, versionWebp, watchArchivo);
