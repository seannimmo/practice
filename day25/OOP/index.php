<?php

class Match 
{
    public $begins_at = null;
    public $score = null;
    public $nr_of_players = null;
    public $length = null;

    public function __construct($begins_at) 
    {
        $this->begins_at = $begins_at;
    }

    public function getEstimatedEnd()
    {
        $begins_at_timestamp = strtotime($this->begins_at);
        $ends_at_timestamp = $begins_at_timestamp + $this->length * 60;

        return date("Y-m-d H:i:s", $ends_at_timestamp);
    }
}