function escolheNumero(numeroEscolhido){
    // ir buscar o operador
    operador = document.querySelector("input[name=operador]").value;

    if(operador !=''){
    numeroAntigo = document.querySelector("input[name=parcela2]").value;
    numeroNovo = numeroAntigo + numeroEscolhido;
    document.querySelector("input[name=parcela2]").value=numeroNovo;

    } else {

    numeroAntigo = document.querySelector("input[name=parcela1]").value;
    numeroNovo = numeroAntigo + numeroEscolhido;
    document.querySelector("input[name=parcela1]").value=numeroNovo;

    }

    document.querySelector('.resultado').innerText += numeroEscolhido;
}

function atribuiOperador(operadorEscolhido){
    document.querySelector("input[name=operador]").value=operadorEscolhido;
    document.querySelector('.resultado').innerText += operadorEscolhido;
}

function fazConta(){
    // ir buscar a parcela 1
    p1 = document.querySelector("input[name=parcela1]").value;
    // ir buscar a parcela 2
    p2 = document.querySelector("input[name=parcela2]").value;
    // ir buscar o operador
    operador = document.querySelector("input[name=operador]").value;

    p1 = parseFloat(p1);
    p2 = parseFloat(p2);

    switch(operador){
        case '+' : {resultado = p1 + p2} break;
        case '-' : {resultado = p1 - p2} break;
        case '/' : {resultado = p1 / p2} break;
        case 'x' : {resultado = p1 * p2} break;
    }

    document.querySelector(".resultado").innerText += "="+resultado;
    document.querySelector("input[name=parcela1]").value = resultado;
    document.querySelector("input[name=parcela2]").value = "";

}

function apagarResultado(){
    document.querySelector(".resultado").innerText = "";
    document.querySelector("input[name=parcela1]").value = "";
    document.querySelector("input[name=parcela2]").value = "";
    document.querySelector("input[name=operador]").value = "";
}