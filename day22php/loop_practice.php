<?php

$time_served = 0;

while ($time_served < 10) {
    $time_served++;
    echo "The prisoner has served {$time_served} years.";
    echo "<br>";
}
//// do while
$time_served = 0;
do {
    $time_served++;
    echo "The prisoner has served {$time_served} years.";
    echo "<br>";
} while ($time_served < 10);

///// for
for ($i = 0; $i < 5; $i++){
    echo "The prisoner has " . (5 - $i) . " more years to serve";
    echo "<br>";
}

///// continue & break
for ($i = 10; $i > 0; $i--) {
    echo "The prisoner has " . $i . " more years to serve.<br>";
    if ($i > 5) {
        continue;
    } 
    echo "Going to a parole hearing...<br>";
    if ($i == 2) {
        echo "Paroled!";
        break;
    }
}