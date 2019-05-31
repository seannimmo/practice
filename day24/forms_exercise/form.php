<?php

require 'lib/DBBlackbox.php';

var_dump($_POST);

//require_once 'list.php';

$name = isset($_POST['name']) ? $_POST['name'] : '';
$motivation = isset($_POST['motivation']) ? $_POST['motivation'] : '';
$color = isset($_POST['color']) ? $_POST['color'] : '';
$gender = isset($_POST['gender']) ? $_POST['gender'] : '';
$express = isset($_POST['express']) ? $_POST['express'] : '';

// handle the incoming request here

// to save any data to the "database":
// insert($any_data)
// $any_data MUST be an array

insert($_POST);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forms exercise</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    <style>
            main {
                width: 600px;
                margin: 0 auto;
            }
    </style>
</head>
<body>
    <main>
    
        <!-- create your form here -->
        <form action="" method="post">
            <div class="form-group">
                <label for="">Name</label>
                <input type="text" class="form-control" name="name" value="<?= htmlspecialchars($name) ?>">
            </div>
            
            <div class="form-group">
                <label for="">What is your motivation?</label>
                <textarea name="motivation" class="form-control" id="" cols="30" rows="10"><?= htmlspecialchars($motivation) ?></textarea>
                
            </div>
            
            <div class="form-group">
                <label for="">Color</label>
                <select name="color" class="form-control" id="">
                    <option value="red" <?= $color == "red" ? "selected" : "" ?>>Red</option>
                    <option value="black" <?= $color == "black" ? "selected" : "" ?>>Black</option>
                    <option value="gold" <?= $color == "gold" ? "selected" : "" ?>>Gold</option>
                </select>
            </div>
    
            <div class="form-group">
                <label for="gender">Boy or Girl?</label>
                <input class="form-control" type="radio" name='gender' value="male" <?= $gender == "male" ? "checked" : "" ?>>male <br>
                <input class="form-control" type="radio" name='gender' value="female"<?= $gender == "female" ? "checked" : "" ?>>female <br>
            </div>

            <div class="form-group">
                <input name="express" value="0" type="hidden" >
                <input name="express" value="1" type="checkbox" <?= $express == "1" ? "checked" : "" ?>>Do you want express? 
            </div>

            <input type="submit" value="Submit" class="form-control btn btn-primary">
        
        
        </form>
    </main>
    
</body>
</html>