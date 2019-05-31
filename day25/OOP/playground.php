<?php
require_once "BlogPost.php";

$all_posts = [];
$total_posts = 0;


$first_post = new BlogPost(1);
$first_post->id = 1;
$first_post->headline = "The first post";
$first_post->text = 'I have decided to write my own blog. This is my first post, beautiful in it\'s simplicity.';
$first_post->added_at = date('Y-m-d H:i:s');
$first_post->user_id = 1;
$first_post->status = 'published';

$second_post = new Blogpost(2, "My second post");
$second_post->publish();
var_dump($second_post);
var_dump($first_post);
var_dump($total_posts);


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

    <br>
    <ul>
        <?php foreach ($all_posts as $post) : ?>
        <h1><?= $post->headline ?></h1>
        <p><?= $post->text?></p>
        <p><?= $post->added_at ?></p>
            
        <?php endforeach; ?>
    </ul>

    
    <script src="" async defer></script>
</body>
</html>