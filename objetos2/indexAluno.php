<?php
    include('aluno.php');

    $aluno1 = new aluno('Pedro', [10,12,15,20]);

    $media_aluno1 = $aluno1->getMedia();

    echo $aluno1->mostraEmTabela();

?>