// Write a function which takes in a string and returns counts of each character in the string

// METHOD 1
function charCount(str){
    // make object to return at end
    var result = {};
    // loop over string, for each character
    for(var i = 0; i < str.length;i++){
        var char = str[i].toLowerCase();
        if(result[char] > 0){
            // if the char is number/letter AND is key in object,add one to count
            result[char]++;
        }else{
            // if the char is not in object then add in object and set the value to 1
            result[char] = 1
        }

    }
    // return object at end
    return result;
}

console.log(charCount('aaaa'));
console.log(charCount('My name is Khan'));

// code refactoring

function charCount(str){
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount('aaaa'));
console.log(charCount('My name is Khan'));

// METHOD 2

function charCount(str){
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();
        if(isAlphaNumeric(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code <91 ) && // upper Alpha A-Z
    !(code > 96 && code < 123)){ // lower Alpha a-z
        return false;
    }
    return true;
}

console.log(charCount('aaaa'));
console.log(charCount('My name is Khan'));

/*******************************************************
 ******************Frequency Counter********************
 ******************************************************/

 // Example Write a function same which accepts two arrays.
 //The function should return true if every value in the array has its corresponding value squared in the second array.
 //The frequency should be same.

 function same(arr1,arr2){
     if(arr1.length !== arr2.length){
         return false;
     }
     for(var i = 0; i < arr1.length;i++){
         let currentIndex = arr2.indexOf(arr1[i] ** 2);
         if(currentIndex === -1){
             return false;
         }
         arr2.splice(currentIndex,1);
     }
     return true;
 }

 console.log(same([1,2,3] , [4,1,9]));
 

 // code refactoring

 function same(arr1,arr2){
     if(arr1.length !== arr2.length){
         return false;
     }

     let frequencyCounter1 = {};
     let frequencyCounter2 = {};
     for(let val of arr1){
         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
     }
     for(let val of arr2){
         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
     }
     for(let key in frequencyCounter1){
         if(!(key ** 2 in frequencyCounter2)){
             return false;
         }
         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
             return false;
         }
     }
     return true;
 }

 console.log(same([1,2,3,1] , [4,1,9,1]));

/***************************************************
****************Anagrams**************************** 
***************************************************/

// Given two strings,write a function to determineif the second string is an anagram of the first.
// An anagram is a word,phrase or name formed by rearranging the letters of another such as cinema formed from iceman.

function validAnagram(first,second){ // first and second are arrays
    if(first.length !== second.length){
        return true;
    }

    const lookUp = {};

    for(var i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists increment otherwise set to 1
        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
    }

    for(var i = 0; i < second.length; i++){
        let letter = second[i];
        // can't find letter then it is not a valid anagram
        if(!lookUp[letter]){
            return false;
        }else{
            lookUp[letter] -= 1;
        }

    }
    return true;
    
}

console.log(validAnagram('anagram','nagaram'));// true
console.log(validAnagram('mice','cime'));// true
console.log(validAnagram('sanaa','anaas'));// true
console.log(validAnagram('decorate','accurate'));// false

/*****************************************
***********Multiple Pointers**************
*****************************************/

// Write a function called sumZero which accepts a sorted array of integers.The function should find first pair where sum is zero.
//Return a array that includes both values that sum is zero or undefined if a pair does not exist

function sumZero(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length;j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i] , arr[j]];
            }
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1]));
console.log(sumZero([-4,-3,-2,-1,0,1,2]));

// the problem in this method is in time complexity O(n^2);

// code refactoring

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left] , arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero([-3,-2,-1,0,1]));
console.log(sumZero([-4,-3,-2,-1,0,1,2]));

// Another example of multiple pointers

// Implement a function called countUniqueValues, which accepts a sorted arrayand counts the unique values in the array.
// There can be negetive numbers in array,but it will always be sorted.

function countUniqueValues(arr){
    if(arr.length === 0 ){
        return 0;
    }
    var i = 0;
    for(var j = 1; j <arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValues([-1,-1,-1,3,7]));// 3
console.log(countUniqueValues([-1,2,-1,,3,6,7,8])); // 8
console.log(countUniqueValues([]));// 0

// SLIDING WINDOW PATTERN

// This pattern involves creating a window which can be either be a array or number from one position to another

/********************************
********EXAMPLE******************
********************************/

// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate maximum sum of n consecutive elements in array.
 
function maxSubarraySum(arr,num){
    if(num > arr.length){
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for(let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if(max < temp){
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySum([1,2,3,4,5,6] , 4));
console.log(maxSubarraySum([1,8,9,0,3,4,5,7,8] , 4));

// We need to refactor the code due to its time complexity O(n^2)

// CODE REFACTOR

function maxSubarraySum(arr,num){
    let tempSum = 0;
    let maxSum = 0;
    if(num > arr.length){
        return null;
    }
    for(let i = 0; i < num;i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1,3,6,-1,5,6,7,0,8,9,6,7,9], 4));

// Binary Search and Linear search

// Linear search

function linearSearch(arr,val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5,7,8],5));
console.log(linearSearch([1,2,3,4,6,7,8],5));

// Binary Search

function binarySearch(arr,val){
    let min = 0
    let max = arr.length -1;
    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];
        if(currentElement < val){
            min = middle + 1;
        }else if(currentElement > val){
            max = middle - 1;
        }else{
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,4,6,9,17] , 9));
// Time complexity of binary search is O(logN)

// Recursion
// recursive function call itself

/*******************************************
**************Example 1*********************
*******************************************/

// Recursive Method
function countDown(num){
    if(num <= 0){// base case
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(5);
/*
// Iterative Method
function countDown(num){
    for(var i  = num;i > 0; i--){
        console.log(i);
    }
}

countDown(5);
*/

/*****************************************
**************Example 2*******************
*****************************************/

function sumRange(num){
    if(num === 1) return 1;// base case
    return num + sumRange(num - 1); // recursive case
}

console.log(sumRange(5));

/*************************************
**********Example 3*******************
*************************************/
// Recursive method
function factorial_recursive(num){
    if(num === 1) return 1;
    return num * factorial_recursive(num -1);
}

console.log(factorial_recursive(5));

// Iterative method
function factorial_iterative(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

console.log(factorial_iterative(5));
/*
Where things go wrong
-No Base case
-Forgetting to return or returning the wrong thing
-Stack overflow
*/

// Recursion helper method

function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return 0;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);

    return result;
    
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
console.log(collectOddValues([1,4,5,2,0,7,8,12]));

// Pure Recursion

function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0){
        return newArr;
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));

// Geometric series progression

//Consider the following series: 1,1,2,3,4,9,8,27,16,81,32,243,64,729,128,2187…
// To find the number
function findNumber(n){
    if(n % 2 === 0){
        n = Math.floor(n/2);
        console.log(Math.pow(3,n-1));
    }else{
        n = Math.floor(n/2) + 1;
        console.log(Math.pow(2,n-1));
    }
}

findNumber(4);