/*
Pushing Pseudocode
Create a new node with a value passed to the function
If the head property is null set the head and tail to be newly created one
If not set the next property on the tail to that node
Set the previous property on the newly created one to be the tail
Set the tail to be newly created one
Increment the length
Return the Doubly Linked List
*/

/*
popping pseudocode
If there is no head return undefined
Store the current tail in a variable to return later
If the length is 1 set the head and tail to be null
Update the tail to be the previous node
Set the newTail's next to null
Decrement the length
Return the value removed
*/

/**
Shifting Pseudocode
If length is 0 return undefined
Store the current head property in a variable;(call old head)
If the length is 1 set head and tail to be null
Update the head to be next of the old head
Set the head's prev property to be null
Set the old head's next to be null
Decrement the length
Return old head
 */

/*
UNSHIFTING PSEUDOCODE
Create a new node with value passed to the function
If the length is 0 set the head and tail to be new node
Otherwise set the prev property on the head of the list to be new node
Set the next property on the new node to be head property
Update the head to be new node
Increment the length
Return the list
*/

/*
Get Pseudocode
If the index is 0 or greater or equal to length return null
If the index is less than or equal to mid of the length of the list
-Loop through the list starting from head and loop towards the middle
-Return the node once it found
If the index is greater than half the length of the list
-Loop through the list starting from the tail and loop toward the middle
-Return the node once it found
*/

/*
Set Pseudocode
Create a variable which is the result of the get method at the index passed to the function
If the get method returns a valid node set the value of that node to be value passed to the function
Return true
*/

/*
Insert pseudocode
If the index is less than zero or greater than or equal to the length return false
If the index is 0 return unshift
If index is same as the length push
Use the get method to access at index -1
Set the next and prev properties on the correct nodes to link everything better
Increment the length
Return true
*/

/*
Remove Pseudocode
If the index is less than zero or greater than or equal to the length return undefined
If the index is zero shift
if the index is same as length -1 pop
Use the get method() to retrieve the item to be removed
Update the next and prev properties to remove the foundNode from the list
Set the next and prev to null on foundNode
Decrement the length
Return the removed node
*/
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
        this.length--;
        return poppedNode;

    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;        

    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var current;
        var count;
        if(index <= this.length/2){
            var current = this.head;
            var count = 0;
            while(count !== index){
                current = current.next;
                count++;
            }

        }
        if(index > this.length/2){
            var current = this.tail;
            count = this.length - 1;
            while(count !== index){
                current = current.prev;
                count--;
            }

        }
        return current;
    }
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        if(index < 0 || index >= this.length) return false;
        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode =  beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length -1) return this.pop();
        var removed = this.get(index);
        removed.prev.next = removed.next;
        removed.next.prev = removed.prev;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }
}

var list = new doublyLinkedList();
list.push('Hi');
list.push('Sexy');
list.push('How');
list.push('Are');
list.push('you');
//list.pop();
//list.shift();
list.unshift('wooohoh');
console.log(list.get(2));
console.log(list.set(2,'Jaan'));
list.insert(2,'Jaan');
list.remove(2);