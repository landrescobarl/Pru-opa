console.log('Connection ...ok');


const btn_agregar = document.getElementById("btn_agragar");
const btn_calcular = document.getElementById("btn_calcular");
const box_peso = document.getElementById("box_peso");
const box_calorias = document.getElementById("box_calorias");

let total_peso = 0, total_calorias = 0;
let min_calorias = 15, max_peso = 10;
let elementos = [];

function score (){
    if (total_peso <= max_peso && total_calorias >= min_calorias) {
        alert("a caminar")
        console.log(total_peso + ' ' + total_calorias );
    }else {
        alert("no caminar")
        console.log(total_peso + ' ' + total_calorias );
    }
} 

let calcular = (param) => {
    for (const t in elementos)   {
        total_peso = parseInt(elementos[t].peso) + total_peso;
        total_calorias = parseInt(elementos[t].calorias) + total_calorias;
    }

    
    score();
}

btn_agregar.addEventListener("click", function(evento){
    elementos.push({peso: box_peso.value, calorias: box_calorias.value})
    console.log(elementos)
});

btn_calcular.addEventListener("click", function(evento){calcular(elementos)});

