<?php 
$foo_bar = 'hello'; #declare variable
unset($foo_bar); #destroy variable
define('FOO', 'hello'); #constant declaration
echo FOO . 'world' ; #concatination
$foo = 'helloz';
$first_name = 'Sean';
$surname = "Nimmo";

function foo()
{
    global $foo;
    echo $foo;
}
foo();

echo "First Name: {$first_name}<br>Last Name: {$surname}";

define('SERVER_SOFTWARE', 'Apache');
echo "This server is running on " . SERVER_SOFTWARE . '.';
$array = [1,2,(float)12,'yes',4,'5', [6,7,8]];
var_dump($array);

$num = 0;
$result = $num++ ; 
var_dump($result);

$owns_a_car = null;
 
echo 'He goes to work by ' . ($owns_a_car ? 'car' : 'bicycle');




?>