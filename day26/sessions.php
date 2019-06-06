<?php
//sessions store for a short time some data. server remembers it
//start it first
session_start();

var_dump($_SESSION);

//$_SESSION['start']= date("H:i:s");

//flashing is opening and saving some info for one page reload, and then deleting the information



//FORM VALIDATION

$valid = true;
if(false !== strpos($value, '-')) // is there a dash '-' anywhere in the string?
{
    $messages[] = "Dashes are invalid";

    $valid = false;
 
}