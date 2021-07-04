// Código del cuadrado


function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 


// Código del triangulo



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}


// Código del círculo


// Diámetro

function diametroCirculo(radio) {
    return radio * 2;
}

// PI

const PI = Math.PI;


// Circunferencia


function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}


// Área

function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
}

 // Aquí interactuamos con el HTML

 const resultadoPerimetro = document.getElementById("perimetro");
 const resultadoArea = document.getElementById("area");


 function calcularPerimetroCuadrado() {
     const input = document.getElementById("InputCuadrado");
     const value = input.value;


     const perimetro = perimetroCuadrado(value);
     resultadoPerimetro.innerHTML = perimetro;
 }

 function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    resultadoArea.innerHTML = area;
    
 }


