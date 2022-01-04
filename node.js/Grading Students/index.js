/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
function gradingStudents(grades) {
    // Write your code here
    function getMultipleOf5(n) {
        return Math.ceil(n / 5) * 5;
    }
    
    const gradesToReturn = [];
    
    grades.forEach(grade => {
        if (grade < 38){
            gradesToReturn.push(grade);
        } else {
            const multipleOf5 = getMultipleOf5(grade);
            if (multipleOf5 - grade < 3) {
                gradesToReturn.push(multipleOf5);
            } else {
                gradesToReturn.push(grade);
            }
        }
    });
    
    return gradesToReturn;
}

gradingStudents([73, 67, 38, 33]) // Output [75, 67, 40, 33]