let numeroSecrecto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMximo = 100;
let maximosIntentos = 5;

console.log(numeroSecrecto)



function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function generarNumeroSecrecto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMximo)+1

    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados)

    if (listaDeNumerosSorteados.length >=maximosIntentos) {
        asignarTextoElemento('p','has sobrepasado la cantid reinicia la pagina para poder volver a jugar');

    } else {
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecrecto()
        } else {
            listaDeNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
    
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroUsuario===numeroSecrecto){
      asignarTextoElemento('p',`felicidades,acertaste el numero secrecto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroUsuario>numeroSecrecto){
            asignarTextoElemento('p','el numero secrecto es menor') 
        } else {
            asignarTextoElemento('p','el numero secrecto es mayor') 
        }
    }
      intentos++;
      limpiarCaja();
    
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secrecto');
asignarTextoElemento('p',`asigna un numero del 1 al ${numeroMximo}`);
numeroSecrecto = generarNumeroSecrecto();
intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();

    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
