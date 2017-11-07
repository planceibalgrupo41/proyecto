/* Parte 1
 * Crea esta lista de enlaces, al pasar el rat�n por encima ,muestra la direcci�n a la
 *cual apuntan en el editor de texto.
 */
function showLink(anchor) {
    var editor = document.getElementById("editor");
    editor.value = anchor.getAttribute('href');
}

/* Parte 2
 * Crea 3 botones , al hacer hover, mostrar el valor mostrado en el bot�n en el editor de
 * texto, y al hacer clic aplicar un fondo de p�gina diferente.
 */
function showButtonName(button) {
    var editor = document.getElementById("editor");
    editor.value = button.innerHTML;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; //#AA00FF
}

function changeBackground() {
    var color = getRandomColor();
    document.bgColor = color;
}

/* Parte 3
 * Generar un bloque de texto que se expanda al hacer click sobre �Click to hide� y se
 * contraiga al hacer click sobre �Click to show�.
 * Los textos �Click to hide�/�Click to show� ser�n mostrados seg�n aplique si el
 * p�rrafo est� expandido o colapsado.
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
