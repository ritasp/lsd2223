function verificaEmail(){
    console.log('Entrei na função verificaEmail.');

    email_a_pesquisar = $('input[name=email]').val();

    console.log(email_a_pesquisar);

    $.post('verificaEmail.php', {email : email_a_pesquisar}, function(data){
        //alert(data);

        if(data !='Ok!'){
            $('.zona-de-mensagens').text('O email já se encontra registado!');
        }
    })
}

function limpaAvisos(){
    $('.zona-de-mensagens').text('');
}