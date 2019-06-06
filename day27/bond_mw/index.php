<?php

require_once "BondCase.php";

$name = "James";

$name = $name . "Bond";

$bond_info = [
    'first_name' => 'James',
    'last_name' => 'Bond',
    'gun' => 'Walther PPK',
    'car' => 'Aston Martin',
    'enemy' => 'Stavro Blofeld',
    'relationship_status' => 'widower',
    'cases' => 24
];

echo "The name is " . $bond_info['last_name'] . ". " . $bond_info['first_name'] . ' ' . $bond_info['last_name'] . '.';

echo "One day when I was driving my " . $bond_info["car"] . " in the Alps " . $bond_info['enemy'] . " came along and made me a " . $bond_info["relationship_status"] . ". If only I had my gun with me!";

$bond_info = ['last_case' => "Spectre"];

$bond = new BondCase(2015);

$bond->setName("Spectre");
$bond->setEnemy("Ernst Stavro Blofeld");

$bond->addGirl("Estrella");
$bond->addGirl("Lucia Sciarra");
$bond->addGirl("Madeleine Swann");

$royale = new BondCase(2006);
$royale->setName("Casino Royale");
$royale->setEnemy("Le Chiffre");

$royale->addGirl("Vesper Lynd");
$royale->addGirl("Solange Dimitrios");

var_dump($royale);
var_dump($bond);
//$avg_girls = BondCase::getAvgGirlsPerCase();

echo "On average Bond has met " . BondCase::getAvgGirlsPerCase() . " per case." ;







