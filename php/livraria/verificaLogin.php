<?php 
include('config.php'); 
?>
<?php
  $user = $_POST['login'];
  $pass = $_POST['pass_login'];

  $query = "select * from clientes where
  email_cliente = '$user' and password_cliente = '$pass' ";

  $resultado = mysqli_query($ligacao,$query);
  $numero_registos = $resultado->num_rows;

  if($numero_registos!=1){
    header('location:index.php?login=erro');
  } else {
    $registo = mysqli_fetch_assoc($resultado);
    $nome = $registo['nome_cliente'];
    $id = $registo['id_cliente'];

    session_start();
    $_SESSION['nome_cliente'] = $nome;
    $_SESSION['id_cliente'] = $id;

    header('location:index.php');
  }
?>