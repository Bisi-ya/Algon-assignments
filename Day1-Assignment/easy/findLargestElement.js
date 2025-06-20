/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length===0)return null;
    let largest=numbers[0];
    for(let i=1;i<numbers.length;i++)
    {
        if(numbers[i]>largest){
            largest=numbers[i];
        }
    }
return largest;
}
module.exports = findLargestElement;

const numbers=[3,16,8,5,22];
console.log(findLargestElement(numbers));