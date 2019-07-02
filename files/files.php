<?php

var_dump(__DIR__);
echo __DIR__;

$images = '/Users/mac/Downloads/images.zip';
$directory = '/Users/mac/Downloads';

var_dump(file_get_contents('/Users/mac/Downloads/images.zip'));
var_dump(pathinfo($images));
//var_dump(scandir($dir));
$open = opendir($directory);
var_dump(readdir($open));
var_dump(readdir($open));
var_dump(readdir($open));
var_dump(readdir($open));
var_dump(readdir($open));
var_dump(readdir($open));
var_dump(readdir($open));
var_dump(readdir($open));
//readdir($dir);

function browse_directory($directory)
{
    $files = scandir($directory);
    foreach($files as $file) {
        if($file == '.' || $file == '..') continue;
        if(is_dir($directory.'/'.$file)) {
            // using recursiveness to go deeper
            browse_directory($directory.'/'.$file);
        } else {
            // do something with the file
        }
    }
}