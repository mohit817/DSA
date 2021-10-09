/*
Queue is a FIFO data structure(FIRST IN FIRST OUT)


Enqueue data structure
This function accepts some value
Create a new node using that value passed to the function
If there are no nodes in queue set this node to be first and last property of queue
Otherwise set the next property on the current last to be that node and then set the last property of the queue to be that node
Increment the size by 1
*/

/*
Dequeue data structure
If there is no first property just return null
Store the first property in a variable
if there is only one node set the value of first and last property to be null
If there is more than one node set the first property to be the next property of the first
Decrement the size by 1

BIG O NOTATION 

 INSERTION O(1)
 REMOVAL O(1)
 SEARCHING O(N)
 ACCESS O(N)

*/

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var queue = new Queue();
console.log(queue.enqueue(23));
console.log(queue.enqueue(230));
console.log(queue.enqueue(2301));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
