<?php

$my_name = "Sean Nimmo";
$height = 1.8;
var_dump($my_name, $height);

///////

function headline($text)
{
    return "<h1>" . $text . "</h1>";
}

echo headline('My website');

//////

$inches = 12;

function inchesToCentimeters ($numInches)
{
    return $numInches * 2.54;
}

echo inchesToCentimeters($inches);

/////
echo '<br>';

$celsius = 100;

function celciusToFahrenheit($tempInCelsius)
{
    return (9/5) * $tempInCelsius + 32;
}

echo celciusToFahrenheit($celsius);

//////

$temperature = 36.5;

function isHealthy($temp, $type)
{
    if($type == 'f'){
        $temp = $temp - 32 * (5/9);
    }
    
    if($temp < 37){
        return true;
    }
    else{
        return false;
    }
}

echo isHealthy($temperature, 'c');

////

$number = 41;

function evenOrOdd($number)
{
    return ($number % 2 == 0 ? 'even' : 'odd');
}

echo evenOrOdd($number);

////
$weekday = "Tuesday";

function sayWeekday($day)
{
    echo 'Today is ' . $day . '.';
}

sayWeekday($weekday);
echo "<br>";

///
$year_of_birth = 1992;

function sayBirthday($year_of_birth)
{
    $this_year = date('Y');
    echo "I was born in {$year_of_birth} so this year I'm celebrating my " . ($this_year - $year_of_birth) . "th birthday.";
}
sayBirthday($year_of_birth);

///////

function assessHeight($cmHeight)
{
    if (180 < $cmHeight) {
        return 'tall';
    } elseif (160 <= $cmHeight) {
        return 'medium';
    } else {
        return 'small';
    }
}

echo assessHeight(177);

/////
echo '<br>';

function getLanguageUsage($lang)
{
//$lang = strtolower($lang);

    switch(strtolower($lang)){
        case 'php':
        case 'python':
        case 'ruby':
            return 'serverside';
            break;
        case 'javascript':
            return 'clientside';
            break;
        default:
            return 'I don\'t know.';
            break;
    }
}

echo getLanguageUsage('PHp');

/////

$age = 18;
$gender = 'female';
$employed = true;

if ($age < 25);
if ($employed);
if ($age > 34 && !$employed) {
    
}
if ($age <= 18);
if ($age < 12 && $gender === 'female');
if ($age >= 18 && !$employed);
if ($age >= 60 && $employed && $gender === 'female');
if (($gender === 'male' && $age > 20) || ($gender === "female" && !$employed && $age > 25)) {
    echo "yes";
}
