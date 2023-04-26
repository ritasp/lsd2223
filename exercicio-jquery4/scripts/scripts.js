$(document).ready(function(){
    $('.textarea').keyup(function(){

        //console.log('carreguei numa tecla');
        conteudo_textarea=$('.textarea').val();
        numero_de_caracteres = conteudo_textarea.length;
        $('.contador').text(numero_de_caracteres);

        if(numero_de_caracteres == 0){
            $('.barra-progresso').removeClass('barra-verde');
        };

        if(numero_de_caracteres >= 1 && numero_de_caracteres <= 25){
            $('.barra-progresso').addClass('barra-verde');
            $('.barra-progresso').removeClass('barra-amarela');

        } else if(numero_de_caracteres > 25 && numero_de_caracteres <= 50){
            $('.barra-progresso').addClass('barra-amarela');
            $('.barra-progresso').removeClass('barra-laranja');

        } else if(numero_de_caracteres > 50 && numero_de_caracteres <= 75){
            $('.barra-progresso').addClass('barra-laranja');
            $('.barra-progresso').removeClass('barra-vermelha');

        } else if(numero_de_caracteres > 75 && numero_de_caracteres <= 100){
            $('.barra-progresso').addClass('barra-vermelha');
        };

    });
});