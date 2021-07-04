const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1
];

const lista1Count = {};

lista1.map((elemento) => {
    if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
    } else {
    lista1Count[elemento] = 1;
    }
});
//Object.entries nos permite apartir de un objeto crear un array que tenga arrays por dentro
const lista1Array = Object.entries(lista1Count).sort((elementoA, elementoB) => {
    return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length - 1];


//Como función

function calcularModa(lista) {
    const crearLista = {};
    
    lista.map(
        function (elemento) {
            if (crearLista[elemento]) {
                crearLista[elemento] += 1;
            }else{
                crearLista[elemento] = 1;
            }
        }
    )
    
    const nuevaModa = Object.entries(crearLista).sort(
        function (elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    )
    
    const moda = nuevaModa[nuevaModa.length - 1]
    return moda;
}