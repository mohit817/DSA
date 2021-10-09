/*
Insert Pseudocode
Push the value into the values property on the heap
Bubble-
Create a variable called index which is the length of the values length - 1
Create a variable called parentIndex which is the floor of (index-1)/2
Keep looping as the values element at the parentIndex is less than values element at the child index
Swap the value of values element att the parentIndex with the value of element property at the child index
Set the index to be parentIndex and start over!

Removing 
(also called extractMax)

Swap the first value in the values property with the last one
Pop from the values property so that you can return value at the end
Have the new root "sink down" to the correct spot
Your parentIndex starts at 0
Find the index of the left child: 2* index + 1(make sure its not out of bounds)
Find the index of right child: 2*index + 2(make sure its not out of bounds)
If the lest or right child is greater than element, swap...if both are larger swap with largest child
The child index you swapped to now becomes the new parent index
Keep looping and swapping until neither child is larger than the element
Return the old root
*/

class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(true){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
             if(element > parent){
                this.values[idx] = parent;
                this.values[parentIdx] = element;
                idx = parentIdx;
             }else{
                 break;
             }              
            
        }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }

            }
            if(rightChild < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)){
                        swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
        }

    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(27);
heap.insert(18);
heap.insert(55);

 