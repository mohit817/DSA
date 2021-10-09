/*
INSERTION SORT ALGORITHM
Start by picking the second elemnt in the array
Now compare the second element with the one before itand swap if necessary
Continue to the next elementand if it is in incorrect order,iterate through the second portion (i.e the left side) 
to place the element in the correct place
Repeat until array is sorted
*/

function insertionSort(arr){
    for(var i = 1 ; i < arr.length ; i++){
        var currentVal = arr[i];
        for(var j = i - 1 ; j >= 0 && arr[j] > currentVal ; j--){
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
        console.log(arr);
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));