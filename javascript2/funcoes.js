function encontraNumero(lista){
    console.log('entrei na funcao');
    menor=lista[0];
    tamanho=lista.length;
    for(i=0 ; i<tamanho ; i=i+1){
        numero_lido=lista[i];
        if(numero_lido<menor){
            menor=numero_lido
        }
    }
    
    return menor;
}

function calculaMedia(lista){
    //var lista=[7,5,9,66,11,5,36,-9]; /* array */
    console.log("entrei na funçao");
    soma=0;

    /* percorrer o array */
    tamanho=lista.length;
    console.log("o tamanho do array é: "+tamanho)
    for(i=0 ; i<tamanho ; i=i+1){
        numero_lido=parseInt(lista[i]);
        console.log(numero_lido);

        soma=soma+numero_lido;
    }
    console.log("a soma é: "+soma);
    media=soma/tamanho;

    //document.write("A média é: "+media)
    return media;
    }

function fazAcaoDoBotao(){
    alert("carreguei no botao");

    var dado_inserido=document.getElementById('lista_de_numeros').value;
    console.log(dado_inserido);

    var dado_inserido_convertido=dado_inserido.split(',');

    resultado=calculaMedia(dado_inserido_convertido);
    alert(resultado);

}