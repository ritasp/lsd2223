<div id="navigation"> 
    	<div id="menu-container"> 
            <ul>  
              <li><a href="index.php">Livraria Online</a></li>          
              <li><a href="index.php">Home<span>Ir para a homepage</span></a></li> 
              <li><a href="index.php?area=lista-de-livros">Livraria<span>Procure um livro</span></a></li>

                  <?php
                  if(isset($_SESSION['nome_cliente'])){ ?>
                    <li><a href="logout.php">Logout<span>Conheça os nossos serviços</span></a></li>
                    
                  <?php
                  } else {
                  ?>

              <li><a href="index.php?area=registos">Registo<span>Conheça os nossos serviços</span></a></li> 
              <?php
                }
              ?>


              <li><a href="index.php?area=lista-de-contactos">Contactos<span>Contacte a livraria</span></a></li>                              
            </ul>
        </div>

        <div class="clear"></div>                   
</div>