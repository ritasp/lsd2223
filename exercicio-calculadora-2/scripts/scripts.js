function escolheNumero(numeroEscolhido){
    operador = document.querySelector("input[name=operador]").value;

    if(operador !=''){
    numeroAntigo = document.querySelector("input[name=parcela1]").value;
    numeroNovo = numeroAntigo + numeroEscolhido;
    document.querySelector("input[name=parcela1]").value=numeroNovo};

    document.querySelector('.resultado').innerText += numeroEscolhido;
}

function apagarResultado(){
    document.querySelector(".resultado").innerText = "";
    document.querySelector("input[name=parcela1]").value = "";
    document.querySelector("input[name=parcela2]").value = "";
    document.querySelector("input[name=operador]").value = "";
}