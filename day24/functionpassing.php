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

///Playground

$item = 'abc';
$array = [];

function add_item(&$array, $item)
{
    $array[] = $item;
}

add_item($array, $item);
add_item($array, 123);
var_dump($array);

///default argument value #1

function element($element, $innerhtml = '', $attributes = '')
{
    return "<{$element} {$attributes}>{$innerhtml}</{$element}>";
}

echo element('a', 'hi', 'href = "https://www.google.com"');
echo element('h3', "abc");

///convert weight
echo "<br>";

function convert_weight($value, $unit = 'kg')
{
    if ($unit == 'lb') {
        return $value / 2.20462262;
    } else {
        return $value * 2.20462262;
    }

}

echo convert_weight(1, 'kg');
echo "<br>";
echo convert_weight(1, 'lb');