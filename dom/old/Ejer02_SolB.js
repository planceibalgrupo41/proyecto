/* Parte 1
 * Crea esta lista de enlaces, al pasar el ratón por encima ,muestra la dirección a la
 *cual apuntan en el editor de texto.
 */
function showLink(anchor) {
    var editor = document.getElementById("editor");
    editor.value = anchor.getAttribute('href');
}

//document.getElementsByClassName("link").onmouseover = function (e) { showLink(e.target); };




/* Parte 2
 * Crea 3 botones , al hacer hover, mostrar el valor mostrado en el botón en el editor de
 * texto, y al hacer clic aplicar un fondo de página diferente.
 */
function showButtonName(button) {
    var editor = document.getElementById("editor");
    editor.value = button.innerHTML;
}

document.getElementsByClassName("backgroundChanger").onmouseover = function (e) { showButtonName(e.target); };

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackground() {
    var color = getRandomColor();
    document.bgColor = color;
}

document.getElementsByClassName("backgroundChanger").onmousedown = changeBackground();

/* Parte 3
 * Generar un bloque de texto que se expanda al hacer click sobre “Click to hide” y se
 * contraiga al hacer click sobre “Click to show”.
 * Los textos “Click to hide”/“Click to show” serán mostrados según aplique si el
 * párrafo está expandido o colapsado.
 */
var showText = false;

function showOrHide() {
    var buttonCollapse = document.getElementById("collapse");

    if (showText == false) {
        document.getElementById("lorem").style.display = "block";
        showText = true;
        buttonCollapse.innerHTML = "Click to hide";
    }
    else {
        document.getElementById("lorem").style.display = "none";
        showText = false;
        buttonCollapse.innerHTML = "Click to show";
    }
    
}