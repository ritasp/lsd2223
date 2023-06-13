<div class="conteudo-lista">
    <?php

    $query_a_executar = "select * from livros ;";
    $resultado = mysqli_query($ligacao,$query_a_executar);
    while($linha = mysqli_fetch_assoc($resultado))
    {
    //print_r($resultado);
    ?>

    <div class="detalhe-livro"> 
        <div class="capa">
            <img src="images/<?php echo $linha['capa_livro'];?>">
        </div>
        <div class="informacao">
            <h2> 
                <?php echo $linha['titulo_livro']; ?>
            </h2>
            <p>
                <?php echo $linha['descricao_livro']; ?>
            </p>
            <p>
                <?php echo $linha['preco_livro']; ?> €
            </p>
        </div>
    </div>

    <?php
    }
    ?>
</div>