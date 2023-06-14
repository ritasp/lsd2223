<?php
if(isset($_SESSION['nome_cliente'])){
    echo "Olá Sr(a) ".$_SESSION['nome_cliente'];
} 
else
{ ?>

<form method="post" action="verificaLogin.php">
    <ul>
        <li>Login: <input type="text" name="login"></li>
        <li>Pass: <input type="password" name="pass_login"></li>
    </ul>
    <button>Entrar</button>
</form>

<?php
  if(isset($_GET['login']) && $_GET['login']=='erro'){
    echo 'Login errado!';
  }
?>

<?php
}
?>