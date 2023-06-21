<?php
  include('../config.php');
  include('../funcoes.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backoffice Livraria</title>
</head>
<body>
    <form method="post" action="insereLivro.php" enctype="multipart/form-data">
    <table>
        <tr> 
            <td>Título Livro</td>
            <td><input type="text" name="titulo"></td>
        </tr>
        <tr> 
            <td>Preço Livro</td>
            <td><input type="text" name="preco"></td>
        </tr>
        <tr> 
            <td>Stock Livro</td>
            <td><input type="text" name="stock"></td>
        </tr>
        <tr> 
            <td>Descrição Livro</td>
            <td><input type="text" name="descricao"></td>
        </tr>
        <tr> 
            <td>Capa Livro</td>
            <td><input type="file" name="capa"></td>
        </tr>
        <tr> 
            <td>Editora Livro</td>
            <td>
                <select name="editora">
                    <?php
                        $lista_editoras = getEditoras($ligacao);
                        while($linha = mysqli_fetch_assoc($lista_editoras)){
                    ?>
                    <option value="<?php echo $linha['id_editora']; ?>"><?php echo $linha['nome_editora']; ?></option>
                    <?php } ?>
                </select>
            </td>
        </tr>
    </table>
    <button>GUARDAR</button>
    </form>
</body>
</html>