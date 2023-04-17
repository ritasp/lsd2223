$(document).ready(function(){
    $('.botaoAdicionar').on('click', function(){
        console.log('carreguei no botao');
        
        itemInserido = $('input[name=item]').val();
        itemAInserirNoHTML = '<li>'+itemInserido+'</li>';

        $('.lista ul').append(itemAInserirNoHTML);
    });

    $('.botaoLimpar').on('click',function(){
        console.log('carreguei no botao');
        $('.lista ul').text('');
    });
});