/**
MERGING ARRAYS PSEUDOCODE
Create an empty array take a look at smallest values in each input array
While there are still values we havent looked at...
If the value in the first array is smaller than value in second array push the value in first array into our results and move onto next
value in the first array
If the value in the first array is larger than value in second array push the value in second array into our results and move onto next 
value in second array
Once we exhaust one array push in all remaining values from the other array
*/

function mergeArray(arr1,arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results;
}

console.log(mergeArray([1,10,50],[2,14,99,100]));

/*
MERGE SORT PSEUDOCODE
Break up the array into halves until you have arrays that are empty or have one element
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of array
Once the array has been merged together, return the merged and sorted array
*/

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return mergeArray(left,right);
}

console.log(mergeSort([10,24,76,73]));