<?php

class Square
{
    protected $x_coord = null;
    protected $y_coord = null;
    protected $piece = null;

    public function __construct($x, $y)
    {
        $this->x_coord = $x;
        $this->y_coord = $y;
    }

    protected function isDark()
    {
        if ($this->x_coord % 2 == $this->y_coord) {
            return true;
        }
    }

    public function __toString() {
        $color = isDark();

        if ($color) {
            return "<div class='dark'> {$this->piece} </div>";
        } else {
            return "<div class='light'> {$this->piece} </div>";
        }
    }
}