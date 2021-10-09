/*
lINEAR SEARCH PSEUDOCODE
This function accepts an array and value
Loop through the array and check if the current array element is equal to the value
If it is, return the index at which the element is found
If the value is never found,return -1
*/

function linearSearch(arr,val){
    for(var i = 0; i < arr.length; i++){
        if(val === arr[i]){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9] , 2)); // 1

/*
Binary search Pseudocode
This function accepts a sorted array and a value
Create a left pointer at the start of the array and a right pointer at the end of the array
While the left pointer comes before the right pointer:
-Create a pointer in the middle
-If you find the value you want,return index
-If the value is too small,move the left pointer up
-If the value is too large move the right pointer down
If you never find the value, return -1
*/

function binarySearch(arr,val){
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    console.log(left,middle,right);
    while(left < right){
        if(val < arr[middle]){
            right = middle -1;
        }else if(val > arr[middle]){
            left = middle + 1;
        }else{
            return middle;
        }
        
    }
}

console.log(binarySearch([1,2,3,43,65,78,90,100] , 43)); // 3

/*
Naive string pseudocode
Loop over the longer string
Loop over the shorter string
If the characters dont match break out of inner loop
If characters do match keep going
If you complete the inner loop and find a match, increment the number of matches
Return count
*/

function naiveSearch(long,short){
    let count = 0;
    for(let i = 0; i < long.length ; i++){
        for(let j = 0 ; j < short.length ; j++){
            if(short[j] !== long[i + j]) break;
            if(j === short.length - 1){
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch('anagram anagram','gra'));
console.log(naiveSearch('anagramanagram','gra'));
console.log(naiveSearch('whisper','per'));
console.log(naiveSearch('sanaa','sa'));
