// Add 1 function
function addUpTo1(n){// O(1)
    var total = 0;
    for(var i = 0; i < n;i++){
        total += i;
    }
    return total;
}

var t1 = performance.now();
console.log(addUpTo1(1000000000));
var t2 = performance.now();
console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds`);

// Add 2  function
function addUpTo2(n){
    return n * (n + 1) / 2;// O(1)
}
var time1 = performance.now();
console.log(addUpTo2(1000000000));
var time2 = performance.now();
console.log(`Time Elasped : ${(time2 - time1) / 1000} seconds`);
/*
Different machines will record different times
The same machine will record different times!
For fast algorithms speed measurents may not be precise enough
O(n) operation inside of O(n) operation O(n * n);
Depending on what we count the number of operations can be as low as 2n or as high as 5n + 2
But regardless of the exact number the number of operations grows roughly proportionally with n
If n doubles the number of operations will also roughly double
*/

 