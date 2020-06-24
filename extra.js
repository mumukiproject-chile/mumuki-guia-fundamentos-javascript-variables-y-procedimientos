/*<hidden-for-student@*/
// Ver https://github.com/MumukiProject/mumuki-apendice-imperativa-javascript/blob/master/biblioteca.js

// =============
// Lección 1 y 2
// =============
/*@hidden-for-student>*/

// Nos dice cuan largo es un string
//
// Por ejemplo:
//
//  ム longitud("hola")
//  4
function longitud(unString) /*<elipsis-for-student@*/ {
  return unString.length;
} /*@elipsis-for-student>*/

// Convierte una palabra en mayúsculas
//
// Por ejemplo:
//
//  ム convertirEnMayuscula("hola")
//  "HOLA"
function convertirEnMayuscula(unString) /*<elipsis-for-student@*/ {
  return unString.toUpperCase()
} /*@elipsis-for-student>*/

// Nos dice si unString empieza con otroString
//
// Por ejemplo:
//
//  ム comienzaCon("hola todo el mundo", "hola todo")
//  true
function comienzaCon(unString, otroString) /*<elipsis-for-student@*/ {
  return unString.startsWith(otroString);
} /*@elipsis-for-student>*/

/*<hidden-for-student@*/
// =========
// Lección 3
// =========
/*@hidden-for-student>*/

/*<hidden-for-student@*/
var fakeConsole = {
  lines: [],
  log: function(line) {
    this.lines.push(line + "\n");
    console.log(line);
  },
  toString: function() {
    return String.prototype.concat.apply([], this.lines);
  }
};
/*@hidden-for-student>*/

// Imprime por pantalla unString
//
// Por ejemplo:
//
//  ム imprimir("¡estoy imprimiendo!")
//  true
function imprimir(unString) /*<elipsis-for-student@*/ {
  fakeConsole.log(unString)
} /*@elipsis-for-student>*/

// Devuelve al azar un número entre 1 y 6
//
// Por ejemplo:
//
//  ム tirarDado()
//  5
//  ム tirarDado()
//  1
//  ム tirarDado()
//  2
function tirarDado() /*<elipsis-for-student@*/ {
  return Math.floor(Math.random() * 6) + 1
} /*@elipsis-for-student>*/


