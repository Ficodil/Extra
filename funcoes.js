function teclar(caracter){

    //Variaveis Locais
    let ecra = document.querySelector(".ecra");

    //Executar
    ecra.innerHTML += caracter;
    ecra.innerHTML += " C";

    calcular();

}

function limpar(){

    //Variaveis Locais
    let ecra = document.querySelector(".ecra");

    //Executar
    ecra.innerHTML = "";

    calcular();

}

function calcular(){

    //Variaveis Locais
    let ecra = document.querySelector(".ecra");
    let saida = document.querySelector("#saida");

    //Executar
    let resultado = parseFloat(ecra.innerHTML) * 1.8 + 32;
    let resultado_1 = parseFloat(ecra.innerHTML) + 273.15;

    if(isNaN(resultado)){
        saida.innerHTML = "";
    }
    else{
        saida.innerHTML = ecra.innerHTML + " = " + resultado + " F <br>"; 
        saida.innerHTML += ecra.innerHTML + " = " + resultado_1 + " K";
    }

}
