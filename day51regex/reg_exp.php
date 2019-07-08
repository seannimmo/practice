<?php

$strings = [
    '12345',
    '123-product',
    'product-123',
    'product-name',
    'Product name',
    'manager@eshop.com',
    '<h1>
        Product name
     </h1>'
];

$results = [];
 
foreach ($strings as $string) {
 
    if (preg_match("#^[0-9a-zA-Z_\-]+$#", $string)) {
 
        $results[] = $string;
    }
 
}
 
var_dump($results);

//1. "#\d+#'
//2. "#\d{3,}#"
//3. '#^\d+$#"
//4. "#^\d#"
//5. "#product#
//6. "#[pP]roduct#" 
//7. "# #"
//8. "#^[^\s]+@[^\s]+$#"
//9. "#^\w+[_\-]?\w*$#" or "#^[\da-zA-Z_\-]+$#

$paragraphs = [
    'And then it happened......',
    'And the boy never smiled again....           ',
    'So ends the story of the cowboy and the samurai ....
       '];

$paragraph = 'And mr. smith said it happened.';
foreach ($paragraphs as $para) {
    $results = preg_replace('#\.\.+\s*$#', "...", $para);
var_dump($results);
};

$string = 'page_2';
 
preg_match('#^page_(\d+)$#i', $string, $matches);
 
var_dump($matches);

$urls = [
    'www.codingbootcamp.cz',
    'google.com',
    'script.aculo.us',
    'apiary.io'
];
$first_level_domains = [];
foreach ($urls as $url) {
    preg_match("#\.([a-z]+)$#", $url, $match);
    $first_level_domains[] = $match[1];
}
var_dump($first_level_domains);

preg_match('#<[^>]+>#', '<h1><h2><span><div>', $matches);
var_dump($matches);

preg_match_all('#<([^>]+)>#', '<h1><h2><span><div>', $matches);
var_dump($matches);

$css = "button {
            background-color: red;
            color: white;
            border-radius: 0.5em;
            padding: 0.5em 1em;
            cursor: pointer;
        }";

preg_match_all('#([a-zA-Z\-]+):#', $css, $matches);
var_dump($matches);

//eager vs lazy.
//eager evaluates whole thing. lazy finds the smallest match

preg_match('#<.*>#', '<h1>Headline</h1>', $matches); // matches the entire string
var_dump($matches);
preg_match('#<.*?>#', '<h1>Headline</h1>', $matches); // matches just <h1>. lazy. ? after the quantifier.
var_dump($matches); 

$string = '"Wingardium Leviosa!" yelled Harry. "Alohomora!" followed Ron.';
preg_match_all('#"(.*?)"#', $string, $matches);
var_dump($matches);

//splitting string
$words = explode('-', 'product-name-as-a-slug'); // splits string into array with '-' as the separator.
var_dump($words);
//use preg_split
$words = preg_split('#[\-_]#', 'product-name-as-slug'); // works
var_dump($words);
$words = preg_split('#[\-_]#', 'product_name_as_slug'); // works too
var_dump($words);

$view_path = 'product/detail/partials.buttons.buy';
$parts = preg_split('#[/\.]#', $view_path);
var_dump($parts);

$view_path = 'product/detail/partials.buttons.buy';
$parts = preg_replace('#[/\.]#', '/', $view_path);
var_dump($parts);


