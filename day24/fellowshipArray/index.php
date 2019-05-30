<?php 

require_once 'fellowship.php';
require_once 'functions.php';

include 'journey.php';

if (is_array(current($party))) {
    //multidimensional array
    foreach ($party as $one_party){
        present_party($one_party);
    }
}
else {
    present_party($party);
}
