// Quick sort algorithm
/*
Steps
1. Put a pivot
2. Partition the array into two sub arrays: elements less than pivot and elements greater than pivot
3. Call quicksort recursively on both parts 
*/

function quickSort(array){
    if(array.length < 2) return array;

    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];
    /*

    for(let i = 0 ; i < array.length ; i++){
        if(array[i] < pivot){
            leftArr.push(array[i]);
        }else{
            rightArr.push(array[i]);
        }
    }
    */

    for(const el of array.slice(0,array.length -1)){
        el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivot,...quickSort(rightArr)]
    }else if(leftArr.length > 0){
        return [...quickSort(leftArr), pivot];
    }else{
        return [pivot,...quickSort(rightArr)];
    }
}

const arr1 = [1,67,89,23,14,12,6,34];
const arr2 = [90,45,23,12,56,112,13,345];
console.log(quickSort(arr1));
console.log(quickSort(arr2));