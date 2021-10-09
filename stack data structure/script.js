/*
Stack is Lifo data structure(last in first out) while queue is Fifo data structure(first in first out)
Stacks are used to handle function invocations(the call stack) for operations like undo/redo and for routing

PUSH PSEUDOCODE
The function should accept a value
Create a new node with that value
If there are no nodes in the stack set the first and last property to be newly created one
If there is atleast one node, create a variable that stores the current first property on the stack
Reset the first property to be newly created one
Set the next property on the node to be the previously created one
Increment the size of stack by 1

POP PSEUDOCODE
If there are no nodes in the stack return null
Create a temporary variable to store the first property on the stack
If there is only one node set the first and last property to be null
If there is more than one node set the first property to be next property on the current first
Decrement the size by 1
Return the value of node removed

BIG O OF STACKS

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
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(! this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

var stack = new Stack();
console.log(stack.push(23));
console.log(stack.push(230));
console.log(stack.push(2301));
console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());