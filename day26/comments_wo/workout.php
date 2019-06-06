<?php

require_once 'lib/DBBlackbox.php';

require_once 'Comment.php';

$comment = new Comment;

if ($_POST) {
    $comment->fillFromArray($_POST);
    $comment->save();
    var_dump($comment);
    header("Refresh: 0");
    // stop everything
    exit();
}


$all_comments_as_arrays = select();
var_dump($all_comments_as_arrays);
$comments = [];
foreach($all_comments_as_arrays as $comment_data) {
    $one_comment = new Comment;
    $one_comment->fillFromArray($comment_data);
    $comments[] = $one_comment;
}
var_dump($comments);

// your code here

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Disney buys Star Wars maker Lucasfilm from George Lucas | BBC News</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <article>

        <div class="img">
            <img src="img/article.jpg" alt="Disney buys Star Wars maker Lucasfilm from George Lucas">
        </div>
        
        <h1>Disney buys Star Wars maker Lucasfilm from George Lucas</h1>

        <p class="story">Disney is buying Lucasfilm, the company behind the Star Wars films, from its chairman and founder George Lucas for $4.05bn (£2.5bn).</p>

        <p>Mr Lucas said: "It's now time for me to pass Star Wars on to a new generation of film-makers."</p>

        <p>In a statement announcing the purchase, Disney said it planned to release a new Star Wars film, episode seven, in 2015.</p>

        <p>That will be followed by episodes eight and nine and then one new movie every two or three years, the company said.</p>

    </article>

    <div class="comments">
        <h2>Comment below:</h2>

        <form action="" method='post'>
            <input type="text" name='author'>
            <textarea name="text" id="" cols="30" rows="10"></textarea>
            <input type="submit" >

        </form>

        <h2>Previous Comments</h2>

        <?php foreach ($comments as $a_comment) : ?>
            <div class='comment'>
                <div class="author">
                    Author: <?= $a_comment->author ?>
                </div>
                <div class="text">
                    Text: <?= $a_comment->text ?>
                </div>
                <div class="date">
                    Date: <?= $a_comment->getCreatedAt('j. n. Y, G:i') ?>
                </div>
            </div>

        <?php endforeach; ?>

        

        <!-- your code here -->
        
    </div>
    
</body>
</html>