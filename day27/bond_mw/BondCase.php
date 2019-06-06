<?php

class BondCase
{
    protected $name = null;
    protected $year = null;
    protected $enemy = null;
    public $girls = [];
    protected static $cases_solved = 0;
    protected static $girls_met = 0;



    function __construct($year)
    {
        $this->year = $year;
        static::$cases_solved++;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setEnemy($enemy)
    {
        $this->enemy = $enemy;
    }

    public function getName()
    {
        return $name;
    }

    public function getEnemy()
    {
        return $enemy;
    }

    public function addGirl($name)
    {
        $this->girls[] = $name;
        static::$girls_met++;
    }

    public static function getAvgGirlsPerCase()
    {
        if(static::$cases_solved == 0) {
            return 0;
        }
        
        return static::$girls_met / static::$cases_solved;
    }


    

}