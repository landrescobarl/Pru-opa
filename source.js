
// Conexion con el JS

console.log('Connection ...ok');


// Se estrae los componentes del DOM mediante document.getElementById 


const btn_agregar = document.getElementById("btn_agragar");
const btn_calcular = document.getElementById("btn_calcular");
const box_peso = document.getElementById("box_peso");
const box_calorias = document.getElementById("box_calorias");
const tabla = document.getElementById("tabla");
const ok = document.getElementById("alert_ok");
const error = document.getElementById("alert_error");

// Variables Internas

let total_peso = 0, total_calorias = 0;
let min_calorias = 15, max_peso = 10, e = 0;
let elementos = [
    { peso: 0, calorias: 0 }
];


// Score del negocio, condicion funcional del requerimiento

function score() {
    if (total_peso <= max_peso && total_calorias >= min_calorias) {
        // true, cumpre con la condicion del peso maximo y calorias minimas
        alert("cumpre con la condicion del peso maximo y calorias minimas " + total_peso + ' ' + total_calorias)
        console.log(total_peso + ' ' + total_calorias);
        
    } else {
        // true, NO cumpre con la condicion del peso maximo y calorias minimas
        alert("NO cumpre con la condicion del peso maximo y calorias minimas " + total_peso + ' ' + total_calorias)
        console.log(total_peso + ' ' + total_calorias);
    }
}

// ArroFuncion para la operacion matematicas
let calcular = (param) => {

    for (const t in elementos) {
        total_peso = parseInt(elementos[t].peso) + total_peso;
        total_calorias = parseInt(elementos[t].calorias) + total_calorias;
    }
    //Llamado a la score del negocio
    score();
}

// Eventos de escucha de botones
btn_agregar.addEventListener("click", function (evento) {

    elementos.push({ peso: box_peso.value, calorias: box_calorias.value })

    // agrega la hilera al final de la tabla (al final del elemento tabla)
    e = parseInt(e + 1);
    var hilera = document.createElement("tr");
    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var textoCelda1 = document.createTextNode('E' + e);
    var textoCelda2 = document.createTextNode(elementos[e].peso);
    var textoCelda3 = document.createTextNode(elementos[e].calorias);
    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    hilera.appendChild(celda1);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    tabla.appendChild(hilera);

});

btn_calcular.addEventListener("click", function (evento) {calcular(elementos) });
