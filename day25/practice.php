<?php

function query($page_nr)
{
    $query = 'SELECT *
    FROM `city`
    LIMIT '.(($page_nr - 1) * 20).', 20;';

    var_dump($query);
}

query(4);