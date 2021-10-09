/*
Radix sort is a special sorting algorithm that works on list of numbers.It never makes comparison between elements!.
It exploits the fact that information about size of number is encoded in the number of digits.
More digits means bigger number!
Time complexity for best average worst case is O(nk) and space complexity is O(n + k)
n = length of array
k = number of digits
*/

/*
In order to implement radix sort, its helpful to build few helper functions first

getDigit(num,i) returns the digit in num at the given place value
digitCount(num) return the number of digits in num
mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
*/

function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}

console.log(getDigit(7323,2));// 3
console.log(getDigit(468,1));// 6

function digitCount(num){
    if(num === 1) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(7323));// 4
console.log(digitCount(456));// 3

function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0 ; i < nums.length ; i++){
        maxDigits = Math.max(maxDigits,digitCount(nums[i]));
    }
    return maxDigits;
}

console.log(mostDigits([1,234,456,5890]));
console.log(mostDigits([12,34,678,234]));
/*
Radix sort pseudocode
Define a function that accepts list of numbers
Figure out how many digits the largest number has
Loop from k = 0 up to this largest number of digits
For each iteration of loop create buckets for each digit(0-9) and place each number in the corresponding bucket based on its kth digit
Replace our existing array with values in our buckets starting with 0 and going up to 9
Return list at the end!
*/

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for( let k = 0 ; k < maxDigitCount ; k++){
        let digitBuckets = Array.from({length : 10}, () => []);
        for(let i = 0 ; i < nums.length ; i++){
            let digit = getDigit(nums[i] ,k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
}

radixSort([1,23,234,6789]);
















