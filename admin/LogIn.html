<!DOCTYPE html>

<?php

session_start();

?>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        
        <form action="LogIn.php" method="POST">
            
            <div>
                Login: <input type="text" name="login">
               
            </div> 
            
            <div> 
                hasło : <input type="password" name="haslo">
            </div>
            
            
            <div>
                <input type="submit" value="zaloguj" />
            </div>
        </form>
        
        
        <?php



       $loginek = filter_input(INPUT_POST, 'login');
          $passwordek = filter_input(INPUT_POST, 'haslo');
          $action = filter_input(INPUT_GET, 'akcja');

          if (isset($action) && $action == 'wyloguj') {
    $_SESSION['zalogowany'] = 0;
    session_destroy();
    echo 'wylogowano pomyśłnie';
}
        
          if((isset($loginek) && isset($passwordek)) || @$_SESSION['zalogowany'] == 1) {
          
          if((!empty($loginek) &&  !empty($passwordek)) || @$_SESSION['zalogowany'] == 1){
              
             $login = filter_var($loginek, FILTER_SANITIZE_STRING);
             $password = filter_var($passwordek, FILTER_SANITIZE_STRING);
             
             if (($login == 'Zabka' && $password == "abc") || @$_SESSION['zalogowany'] == 1 ){
              echo 'zalogowano jako '.$login."<br/>";
              echo 'PANEL ADMINA <br/>';
              echo '<a href="LogIn.php">Odśwież</a><br/>';
              echo '<a href="LogIn.php?akcja=wyloguj">wyloguj</a>';
              
              $_SESSION['zalogowany'] = 1;
     
              
             } else {
                 echo 'podany login lub hasło jest nieprawidłowe';    
             }
          }
 else {
              echo 'nie podano loginu lub hasła';
 }
          }
          
        ?>
    </body>
</html>
