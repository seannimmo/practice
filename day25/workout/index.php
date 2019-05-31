<?php

$page_title = 'Shopping list';

$page = 'home';

if (isset(  $_GET['page']  )) {
    $page = $_GET['page'];
}

$items = [];

if (!empty($_POST['items'])) { //if it exists and is not empty
    var_dump($_POST);
    $items = $_POST['items'];

    $items = array_filter($items); // removes empty slots in an array
}

?>
<!DOCTYPE html>
 <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        
        <h1><?= $page_title ?></h1>

        <a href="?page=form">Form</a>
        <a href="?page=home">Home</a>

        <?php if ($page == 'home') : ?>
            <?php include 'home.php'; ?>
        <?php endif; ?>

        <?php if ($page == 'form') : ?>
            <?php include 'form.php'; ?>
        <?php endif; ?>
        
        <script src="" async defer></script>
    </body>
</html>