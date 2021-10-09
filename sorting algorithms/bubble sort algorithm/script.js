 
/*
Bubble sort Pseudocode

Start looping from with a variable called i at the end of the array towards the beginning
Start an inner variable with a variable called j from the beginning until i - 1
If arr[j] is greater than arr[j + 1] swap those two values!
Return the sorted array
*/

function bubbleSort(arr){

    const swap = (arr,idx1,idx2) =>{
        [arr[idx1] , arr[idx2]] = [arr[idx2] , arr[idx1]];
    }

    for(var i = arr.length ; i > 0 ; i--){
        for(var j = 0 ; j < i -1 ; j++){
            console.log(arr,arr[j],arr[j + 1]);
            if(arr[j] > arr[j + 1]){
                swap(arr , j , j+1);
            }
            
            //SWAP
            //var temp = arr[j];
            //arr[j] = arr[j + 1];
            //arr[j + 1] = temp;
        }
        console.log('ONE PASS COMPLETE');
    }
    return arr;
}

console.log(bubbleSort([37,29,45,8]));

// Optimized with noSwaps
/*
function bubbleSort(arr){

    const swap = (arr,idx1,idx2) =>{
        [arr[idx1] , arr[idx2]] = [arr[idx2] , arr[idx1]];
    }

    for(var i = arr.length ; i > 0 ; i++){
        var noSwaps;
        for(var j = 0 ; j < i -1 ; j++){
            noSwaps = true;
            console.log(arr,arr[j],arr[j + 1]);
            if(arr[j] > arr[j + 1]){
                swap(arr , j , j+1);
                noSwaps = false;
            }
            
            //SWAP
            //var temp = arr[j];
            //arr[j] = arr[j + 1];
            //arr[j + 1] = temp;
        }
        console.log('ONE PASS COMPLETE');
    }
    return arr;
}

console.log(bubbleSort([1,23,17,56,90,86,12]));
*/
