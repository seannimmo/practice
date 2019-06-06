<?php
$user_id = 4; //current user

require_once "Auth.php";

session_start();
var_dump($_SESSION);

//$_SESSION['user_id'] = $user_id; //process of logging in

$username = "Sean";

$user = [
    'user id' => $user_id,
    'username' => $username
];

Auth::addUser(['user_id' => 1, 'username' => 'Kevin']);
Auth::addUser(['user_id' => 2, 'username' => 'Stuart']);
Auth::addUser(['user_id' => 3, 'username' => 'Bob']);
 


Auth::addUser(['user_id' => $user_id, "username" => $username]);

var_dump(Auth::getUsers());

$current_user = Auth::getCurrentUser();
var_dump($current_user);
