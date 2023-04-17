$(document).ready(function(){

    $('nav span').on('click',function(){
        $('nav ul').slideToggle(1500);
    });
    
    $('button').on('click',AnimaCaixas);

});

function AnimaCaixas(){

    const tempo = 1000;

    $('.cx-1').fadeIn(tempo,function(){
        $('.cx-2').fadeIn(tempo,function(){
            $('.cx-3').fadeIn(tempo,function(){
                $('.cx-4').fadeIn(tempo);
            });
        });
    });

};