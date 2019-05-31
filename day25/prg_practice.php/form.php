<?php

require 'DBBlackbox.php';

$error = [];

//find the data according to the id if it was already created
if (!empty($_GET['id'])) {
    $book = find($_GET['id']);

} else {
    $book = null;
}

$title = isset($_POST['title']) ? $_POST['title'] : '';
$author = isset($_POST['author']) ? $_POST['author'] : '';
$genre = isset($_POST['genre']) ? $_POST['genre'] : '';
$rating = isset($_POST['rating']) ? $_POST['rating'] : '';

if ($_POST) {
    $book = $_POST;




    //validator
    $valid = true;
    if (intval($rating) == 0) {
        $error = 'Please input a number between 1 and 5';
        $valid = false;
    }

    if ($valid) {
        if (!empty($_GET['id'])) {
            update($_GET['id'], $book);
            $id = $_GET['id'];
        } else {
            $id = insert($book);
        }

        header('Location: form.php?id=' . $id);
    }
}




?>

<!DOCTYPE html>
<html class="no-js"> 
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="">
</head>
<body>
    <?php var_dump($_POST); var_dump($error); var_dump($_GET)?>


    <form action="" method="post">
        <input type="text" value="<?= $title ?>" name= "title">
        <input type="text" value="<?= $author ?>" name="author">
        <input type="text" value="<?= $genre ?>" name="genre">
        <input type="text" value="<?= $rating ?>" name="rating">

        <input type="submit" value="save">
    </form>

   
    
    <script src="" async defer></script>
</body>
</html>