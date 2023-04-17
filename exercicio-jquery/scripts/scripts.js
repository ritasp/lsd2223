$(document).ready(function(){
    $('.button').click(function(){
        console.log('carreguei no botão');
    });

    $('input').mouseenter(function(){
        console.log('meti o rato em cima');
    });

    $('input').mouseleave(function(){
        console.log('tirei o rato em cima');
    });

    $('input').focus(function(){
        $(this).addClass('inputSelecionado');
        $('.zona-de-erro').text('Por favor preencha o campo.');
    });

    $('input').blur(function(){
        $(this).removeClass('inputSelecionado');
        valorInserido = $(this).val();
        console.log(valorInserido);

        if(valorInserido == ''){
            $('.zona-de-erro').text('Por favor preencha o campo.');
        }
    });
});