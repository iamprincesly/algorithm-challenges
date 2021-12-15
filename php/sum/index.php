<?php

/**
 * @desc Sum Input Algorithm
 * @author: Sylvanus Etim
 * @lang: PHP
 */

function sumNumbers(array $nums):int {
    $total = 0;
    foreach ($nums as $num) {
        if (!is_int($num)) {
            throw new Exception('Please enter only numbers');
        }

        $total += $num;
    }

    return $total;
}

sumNumbers([10, 10, 10]);

function sumNumbersSpread(...$nums):int {
    $total = 0;

    foreach($nums as $num) {
        if (!is_int($num)) {
            throw new Exception('Please enter only numbers');
        }

        $total += $num;
    }
    return $total;
}

sumNumbersSpread(10, 10, 10);