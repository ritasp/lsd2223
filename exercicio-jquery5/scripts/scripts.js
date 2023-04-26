$(document).ready(function(){
    $('.content').load('home.html');
});

function carregaPagina(destino){

    switch (destino){
        case 'página 1' :  $('.content').load('home.html'); break
        case 'página 2' :  $('.content').load('home2.html'); break
        case 'página 3' :  $('.content').load('home3.html'); break
        case 'página 4' :  $('.content').load('home4.html'); 
    }

}