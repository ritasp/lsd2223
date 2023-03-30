function procuraNumero(){
    alert('entrei na função')

    //a função tem de ir buscar a lista de números inserida.
    lista = document.getElementById('lista').value;
    //outra forma de ir buscar a lista é: lista = document.querySelector('input[name="lista"]').value)

    //depois, tem de ir buscar o número a pesquisar.
    numero = document.getElementById('numero').value;

    //converter a string (lista de números) recebida para array (números divididos por ;).
    listaConvertida = lista.split(';');
    //console.log(listaConvertida);

    tamanho=lista.length;
    numero_encontrado=0;
    /*for(i=0 ; i<tamanho ; i=i+1) {
        numero_lido=listaConvertida[i];
        if(numero_lido == numero){
            numero_encontrado = numero_encontrado + 1;
        }
    }*/
    // i=i+1 é igual a ter i++

    i=0
    while(numero_encontrado == 0 && i < tamanho){
        numeroLido = listaConvertida[i];
        if(numeroLido == numero){
            numero_encontrado = numero_encontrado + 1;
        }
        console.log(i);
        i=i+1;
    }


    if(numero_encontrado >=1){
        document.getElementById('resultado').innerText="o número está na lista!";
    } else {
        document.getElementById('resultado').innerText="o número NÃO está na lista!";
    }

}