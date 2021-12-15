'use strict';

/**
 * @desc Sum Input Algorithm
 * @author: Sylvanus Etim
 * @lang: JavaScript
 */

const sumNumbers = (nums) => {
    let total = 0;

    nums.forEach(num => {
        if (typeof num !== 'number') {
            throw new Error('Please enter only numbers');
        }

        total += num;
    });

    return total;
}

sumNumbers([10, 10, 10]);

const sumNumbersSpread = (...nums) => {
    let total = 0;
    nums.forEach(num => {
        if (typeof num !== 'number') {
            throw new Error('Please enter only numbers');
        }

        total += num;
    });

    return total;
}

sumNumbersSpread(10, 10, 10);