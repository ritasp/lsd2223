document.querySelector('#nome').addEventListener('focus', mostraConteudoInput);
document.querySelector('#nome').addEventListener('blur', escondeConteudoInput);

document.querySelector('#email').addEventListener('focus', mostraConteudoInput);
document.querySelector('#email').addEventListener('blur', escondeConteudoInput);

function mostraConteudoInput(){
    console.log('entrei no add event listener');
}

function escondeConteudoInput(){
    console.log('entrei no add event listener PARA ESCONDER');
    console.log(this.value);
}