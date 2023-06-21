<?php
  include('config.php');
  include('funcoes.php');
  session_start();
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
<title>Livraria Curso PHP</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="description" content="">
<meta name="keywords" content="">
<link rel="stylesheet" href="css/style.css" type="text/css"/>
</head>
<body>
<div id="container">
	<div id="header">

   <?php include('menu.php')?>

	</div>

	<div id="wrap">
    	<div id="navcontainer">
        <?php include('left.php'); ?>
      </div>
    	
      <div id="content">
        <?php
        if(isset($_GET['area'])){

          $area_escolhida = $_GET['area'];
          if($area_escolhida == 'lista-de-livros'){
            include('lista.php');
          } else if($area_escolhida == 'registos') {
            include('registo.php');
          } else if($area_escolhida == 'lista-de-contactos') {
            include('contactos.php');
          } else {
            include('erro.php');
          }
        
        } else {
          include('home.php');
        }


        ?>
    	</div>

    	<div id="subcontent">
        <?php include('right.php'); ?>
      </div>

    	<div id="footer">
    		<?php include('footer.php'); ?>
    	</div>
  </div>

</div>

<script src="scripts/jquery-3.6.4.min.js"></script>
<script src="scripts/scripts.js"></script>
</body>
</html>