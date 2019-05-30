<?php

$party = [
    'frodo' => "Frodo"
];

function change_party(&$party)
{
    unset($party['frodo']);
}

var_dump($party);

$c = 123;
$a = &$c;
$a++;
var_dump($c);

function headline($text, $importance = 1)
{
    return "<h{$importance}>{$text}</h{$importance}>";
}

echo headline("Hello World", 6);