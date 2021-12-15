<?php

/**
 * @desc Array combination to sum target input algorithm
 * @author: Sylvanus Etim
 * @lang: PHP
 */
function howSum(int $targetSum, array $numbers) {
    $sumToTarget = [];

    for ($i = 0; $i < count($numbers); $i++) {
        $num = $numbers[$i];
        $nextNum = $numbers[$i + 1] || '';

        if ($num === $targetSum) {
            array_push($sumToTarget, $num);
            break;
        } else if ($num + $nextNum === $targetSum) {
            array_push($sumToTarget, $num, $nextNum);
            break;
        }
    }

    return (count($sumToTarget) !== 0) ? $sumToTarget : null;
}

echo howSum(8, [9, 4, 9, 2, 6, 2]); // [2, 6]
echo howSum(4, [2, 2, 9, 2, 6, 2]); // [2, 2]
echo howSum(5, [2, 2, 1, 4, 2, 3, 2]); // [1, 4]