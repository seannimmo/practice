<?php

require_once 'Piece.php';
require_once "Square.php";

$black_pawn = new Piece('p');
$white_queen = new Piece('Q');
 
//call the object as a string;
echo $black_pawn;
echo $white_queen;

$a2 = new Square(1, 2);
$b2 = new Square(2, 2, $white_queen);
$c2 = new Square(3, 2, $black_pawn);
$d2 = new Square(4, 2);
echo $a2;
echo $b2;
echo $c2;
echo $d2;


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
        <style> html { background-color: red; } </style>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <script src="" async defer></script>
    </body>
</html>