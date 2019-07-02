<?php

var_dump($_FILES); //contains info about all files that are uploaded
if($_FILES) {
    var_dump(file_exists($_FILES['uploaded_file']['tmp_name']));
    copy($_FILES['uploaded_file']['tmp_name'], __DIR__.'/new_file.jpg');
    move_uploaded_file($_FILES['uploaded_file']['tmp_name'], '/Users/mac/web/bootcamp'.$_FILES['uploaded_file']['name']);

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
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <form action='' method='post' enctype='multipart/form-data'>
            <input type ='file' name = 'uploaded_file'>
            <br>
            <br>
            <input type="submit" value='Upload'>
        </form>
        <script src="" async defer></script>
    </body>
</html>