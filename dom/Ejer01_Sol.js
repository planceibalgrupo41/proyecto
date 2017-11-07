/* Ejercicio 1
 * A partir de la página web http://www.ceibal.edu.uy/es/ y utilizando las 
 * funciones DOM, mostrar por pantalla la siguiente información:  
 */

//1) Número de enlaces de la página
var anchors = document.getElementsByTagName('a'); 
//... otra opción posible sería:
//var anchors = document.links;
console.log(anchors.length);

//2) Listado de imágenes de la página
var images = document.getElementsByTagName('img');
//... otra opción posible sería:
//var anchors = document.images;
console.log(images);

//3) Remover del footer la última columna
var footer = document.getElementById('footer');
var row = footer.getElementsByClassName("row")[0];
var posicion = row.childElementCount-1; //en esta posición está la última columna.
var lastColumn = row.childNodes[posicion];
row.removeChild(lastColumn);
