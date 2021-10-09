/*
Selection sort pseudocode
Store the first elementas the smallest value
Compare this item to the next item in the array until you find a smaller number
If a smaller number is found designate that smaller number to be new 'minimum' and continue until the end of array
If the minimum is not the value(index) you initially began with,swap the two values
Repeat this with next element until the array is sorted
*/

function selectionSort(arr){
    const swap = (arr,idx1,idx2) =>{
        [arr[idx1] , arr[idx2]] = [arr[idx2] , arr[idx1]];
    }
    for(var i = 0; i < arr.length ; i++){
        var lowest = i;
        for(var j = i + 1 ; j < arr.length ; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if( i !== lowest){
            swap(arr,i,lowest);

        }
        //var temp = arr[i];
        //arr[i] = arr[lowest];
        //arr[lowest] = temp;
    }
    return arr;
}

console.log(selectionSort([34,22,10,19,17]));