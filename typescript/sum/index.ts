"use strict";

/**
 * @desc Sum Input Algorithm
 * @author: Sylvanus Etim
 * @lang: TypeScript
 */

function sumNumbers(nums: number[]): number {
    let total: number = 0;

    nums.forEach(function(num: number) {
        total += num;
    });

    return total;
}

sumNumbers([10, 10, 10]);