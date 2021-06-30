console.log('Connection ...ok');

var btn_agregar = document.getElementById("btn_agragar");
var btn_calcular = document.getElementById("btn_calcular");
var box_peso = document.getElementById("box_peso");
var box_calorias = document.getElementById("box_calorias");

var total_peso = 0,
    total_calorias = 0;
var min_calorias = 15,
    max_peso = 10;
var elementos = [];

function score() {
    if (total_peso <= max_peso && total_calorias >= min_calorias) {
        alert("a caminar");
        console.log(total_peso + ' ' + total_calorias);
    } else {
        alert("no caminar");
        console.log(total_peso + ' ' + total_calorias);
    }
}

var calcular = function calcular(param) {
    for (var t in elementos) {
        total_peso = parseInt(elementos[t].peso) + total_peso;
        total_calorias = parseInt(elementos[t].calorias) + total_calorias;
    }

    score();
};

btn_agregar.addEventListener("click", function (evento) {
    elementos.push({ peso: box_peso.value, calorias: box_calorias.value });
    console.log(elementos);
});

btn_calcular.addEventListener("click", function (evento) {
    calcular(elementos);
});