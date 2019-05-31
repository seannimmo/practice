<?php 

class Vehicle
{
    public $wheel_count = null;
    public $color = null;
    public $avg_speed = null;
    
    public function travel($distance)
    {
        return $distance / $avg_speed;
    }
}

class Car extends Vehicle
{
    public $wheel_count = 4;

    public function change_color($color)
    {
        $this->color = $color;
    }
}

class Horse extends Vehicle
{
    public $wheel_count = 0;
    public $is_fed = false;

    public function feed()
    {
        $this->is_fed = true;
    }
}

$yes = new Horse;
$yes->feed();
var_dump($yes);

class Address
{
    public $street = '';
    public $house_nr = '';

    public function __toString()
    {
        return "I am at " . $this->street . " " . $this->house_nr; 
    }
}

$here = new Address(); 
$here->street = "Krakovska";
$here->house_nr = 9;
echo $here;