console.log('Connection ...ok')


let min_calorias = 15, max_peso = 10;

let elementos = [
    {
        id: 'E1',
        calorias: 5,
        peso: 3
    },
    {
        id: 'E2',
        calorias: 3,
        peso: 5
    },
    {
        id: 'E3',
        calorias: 5,
        peso: 2
    },
    {
        id: 'E4',
        calorias: 1,
        peso: 8
    },    {
        id: 'E5',
        calorias: 2,
        peso: 3
    },

]

let calc = (elementos) => {
    
    let total_peso = 0, total_calorias = 0;
    total_peso = elementos[0].peso + elementos[1].peso + elementos[3].peso;
    total_calorias = elementos[0].calorias + elementos[1].calorias + elementos[3].calorias;

    if (total_peso>max_peso & total_calorias<min_calorias) {
        console.log("a caminar")
    }



}

calc (elementos);