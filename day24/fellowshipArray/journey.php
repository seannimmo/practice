<?php

$party = [
    'bilbo' => 'Bilbo Baggins',
    'frodo' => 'Frodo Baggins',
    'ring' => 'The One Ring',
];

// change data

$party['gandalf'] = 'Gandalf the Grey';

//remove Bilbo

unset($party['bilbo']);

$party['sam']= "Samwise Gamgee";

unset($party['gandalf']); 

$party = leave_hobbiton($party);

$party = go_to_bree($party);

$party = go_to_weathertop($party);

$party = meet_arwen($party);

$party = go_to_rivendell($party);


$party = go_to_moria($party);

$party = go_to_falls_of_rauros($party);

$party = break_fellowship($party);

