<?php

require 'DBBlackbox.php'; 

//errors that we want to display to the user
$errors = [];

//determine whether we are creating or editing
if (!empty($_GET['id'])) {   // if this is edit
                            // == if there is an identifier of the edited
    $array = find($_GET['id']);                       //record in the URL
    $name = $array['name']; 
} else { //create
    $name = null;   //prepare empty data
}

if ($_POST != []) { //if the form was submitted
//    $name = $_POST['name'];
   //update data from request
   $name = isset($_POST['name']) ? $_POST['name'] : $name; //checks existence in request

    //validation
    $valid = true; //everything is fine

    if ($name == '') {
        $errors[] = "Please fill in the name";
        $valid = false;
    }

    if ($valid) {
        //save the data
        if (!empty($_GET['id'])) { //if editing
            update($_GET['id'], ['name' => $name]); //DBBlackbox only handles arrays
        } else {
           $id = insert(['name' => $name]); //insert new data, get the identifier
        }

        //inform user

        //Redirect to a page with GET so that data is only sent on submit, not refresh. 
        header('Location: prg.php?id=' . $id);
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
    <!-- display errors to the user -->
    <?php var_dump($errors); var_dump($_POST) ?>
        
    <form action="" method="post">
        <input type="text" name="name" value = "<?= $name ?>">
        <br>

        <input type="submit" value="save">
    </form>
    
<script src="" async defer></script>
</body>
</html>