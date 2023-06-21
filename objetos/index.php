<?php
    include('pessoa.php');

    /*$pessoa1 = new pessoa();
    $pessoa1->nome = 'João';
    $pessoa1->morada = 'Lisboa';
    $pessoa1->email = 'joão@mail.com';

    echo $pessoa1->nome;

    $pessoa2 = new pessoa();
    $pessoa2->nome = 'Maria';
    $pessoa2->morada = 'Porto';
    $pessoa2->email = 'maria@mail.com';

    echo $pessoa2->morada;*/

    $pessoa3 = new pessoa('Pedro', 'Faro', 'pedro@mail.com');
    $pessoa4 = new pessoa('Inês', 'Braga', 'ines@mail.com');

    echo $pessoa3->getNome();
    echo ', ';
    echo $pessoa3->getMorada();
    echo ', ';
    echo $pessoa3->getEmail();
    echo '<br>';
    echo $pessoa4->getNome();
    echo ', ';
    echo $pessoa4->getMorada();
    echo ', ';
    echo $pessoa4->getEmail();
    echo '<br>';

    $pessoa3->setNome('Manuel');
    echo $pessoa3->getNome();

    echo $pessoa3->mostraEmTabela();
    echo $pessoa4->mostraEmTabela();

    //$pessoa3->nome = 'Joana';
    //echo $pessoa3->nome;

?>