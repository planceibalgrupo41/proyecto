/* 
 * Ejercicio 1
A partir de la página web http://www.ceibal.edu.uy/es/ y utilizando las funciones DOM, 
mostrar por pantalla la siguiente información:  

El código JavaScript ejecutarlo desde la consola del navegador.
 * */

//Número de enlaces de la página
var anchors = document.getElementsByTagName('a');
console.log(anchors.length);

//Listado de imágenes de la página
var images = document.getElementsByTagName('img');
console.log(images);

//Remover del footer la última columna
var footer = document.getElementById('footer');
var container = footer.getElementsByClassName("container")[0];
var row = container.getElementsByClassName("row")[0]
row.removeChild(row.lastChild);
