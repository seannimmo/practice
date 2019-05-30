<?php

var_dump($_GET);
var_dump($_POST);

?>
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <form action="" method="get">

            <!-- name=greeting is added to $_GET  -->
            <input type="text" name="greeting" value="hello">
            <input type="submit" value="Submit!">
        </form>

        
        <form action="" method="post">
            <input 
                type="text" 
                name="author" 
                value="<?= isset($_POST['author']) ? $_POST['author'] : ''?>">
            <textarea name="text" id='' cols='30'></textarea>
            <input type="submit" value="Submit!">
        </form>

        
        <script src="" async defer></script>
    </body>
</html>