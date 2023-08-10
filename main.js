var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "blue";
var larguraLinha = 2;

var mouseX;
var mouseY;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = larguraLinha;
ctx.arc(200, 200, 80, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", desenharCirculo);

function desenharCirculo(e) {
    color = document.getElementById("caixaTextoCor").value;
    larguraLinha = document.getElementById("caixaTextoLargura").value;

    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    circuloCanvas(mouseX, mouseY);
}

function circuloCanvas(mouseX, mouseY) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = larguraLinha;
    ctx.arc(mouseX, mouseY, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

//atividade adicional
function limparCanvas() {
    
}
