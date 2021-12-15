"use strict";

/**
 * @desc Array combination to sum target input algorithm
 * @author: Sylvanus Etim
 * @lang: TypeScript
 */
function howSum(targetSum: number, numbers: number[]):any {
    const sumToTarget: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        const num: number = numbers[i];
        const nextNum: any = numbers[i + 1] || '';

        if (num === targetSum) {
            sumToTarget.push(num);
            break;
        } else if (num + nextNum === targetSum) {
            sumToTarget.push(num, nextNum);
            break;
        }
    }

    return (sumToTarget.length !== 0) ? sumToTarget : null;
}

console.log(howSum(8, [9, 4, 9, 2, 6, 2])); // [2, 6]
console.log(howSum(4, [2, 2, 9, 2, 6, 2])); // [2, 2]
console.log(howSum(5, [2, 2, 1, 4, 2, 3, 2])); // [1, 4]
