<?php

$movies = [
    'The Shawshank redemption',
    'The Godfather',
    'The Godfather II',
    'Dark Knight', 
    '12 angry men', 
    'Schindler\'s list',
    'Pulp fiction',
    'Lord of the Rings: Return of the King',
    'The good, the bad and the ugly',
    'Fight club'
];

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
        
        <ol>

            <?php 
                for ($movie = 0; $movie < count($movies); $movie++) {
                    echo "<li>{$movies[$movie]}</li>";
            }



            ?>
        
        </ol>

        <ol>
        <?php 
                sort($movies);
                var_dump($movies);
                for ($movie = 0; $movie < count($movies); $movie++) {
                    echo "<li>{$movies[$movie]}</li>";
            }



            ?>
        </ol>
        
        <script src= async defer></script>
    </body>
</html>