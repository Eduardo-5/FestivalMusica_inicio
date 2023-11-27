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

const {series, src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css() {
  return src("src/scss/app.scss").pipe("sass()").pipe(dest("./build/css"));
}

exports.css = css;
