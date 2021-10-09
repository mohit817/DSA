/*
PUSHING PSEUDOCODE
This function should accept a value
Create a new node using the value passed to the function
If there is no head property on the list,set the head and tail to newly created one 
Otherwise set the next property on the tail to be the new node and set the tail property on the list to be newly created node
Increment the length by 1
*/

/*
POPPING PSEUDOCODE
If there are no nodes in the list return undefined
Loop through the list until you reach the tail
Set the next property of second to last node to be null
Set the tail to be second to last node
Decrement the length of list by 1
Return the value of node removed
*/

/*
SHIFTING PSEUDOCODE
If there are no nodes return undefined
Store the current head property in a variable
Set the head property to be the current head's next property
Decrement the length by 1
Return the value of node removed
*/

/*
UNSHIFTING PSEUDOCODE
This function should accept a value
Create a new node using value passed to the function
If there is no head property on the list, set the head and tail to be newly created one
Otherwise set the newly created node's next property to be the current head property on the list
Set the head property on the list to be that newly created one
Increment the length of the list by 1
Return the linked list
*/

/*
Get Retrieving a node by its position in the linked list
GET PSEUDOCODE
This function should accept an index
If the index is less than 0 or greater than or equal to the length of list return null
Loop through the list until you reach the index nad return the node at that specific index
*/

/*
Set - Changing the value of a node based on its position in the linked list
Set pseudocode
This function should accept a value and index
Use your get function to specific node
If node is not found return false;
if node is found then set the value of that node to be value passed to the function and return true
*/

/*
INSERT PSEUDOCODE
If the index is less than zero or greater than length, return false
If the index is same as length then push the newnode to end of the list
if the index is 0 unshift a new node to start of the list
Otherwise using get method access the node at index -1
Set the next property on that node to be new node
set the next property on the new node to be the previous next
Increment the length
return true
*/

/*
Remove Removing a node from the Linked list at a specific position
Remove Pseudocode
If the index is less than zero or greater than the length return undefined
If the index is same as length -1 pop
If the index is 0 shift
Otherwise using the get method access the node at the index -1
Set the next property on that node to be the next of new node
Decrement the length 
Return the value of node removed
*/

/*
Reverse pseudocode
Swap the head and tail
Create a variable called next
Create a variable called prev
Create a variable called node and initialize it to the head property
Loop through the list
Set next to be the next property on whatever node is
Set the next property on the node to be whatever prev is
Set prev to be value of node variable
Set the node variable to be the value of next variable 
*/
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyListedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }
    transverse(){
        var current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        return currentHead;
        
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.head = this.tail;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var current = this.head;
        var counter = 0;
        while(counter !== index){
            current = current.next;
            counter++;
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
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) return this.unshift(val);
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        prev.next = newNode;
        newNode.next = prev.next;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return this.pop();
        if(index === 0) return this.shift();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length ; i++){
            next = node.next;// learn
            node.next = prev;// learn
            prev = node;// learn
            node = next;// learn
        }
        return this;
    }
}

//var first = new Node('Hi');
//first.next = new Node('there');
//first.next.next = new Node('How');
//first.next.next.next = new Node('Are');
//first.next.next.next.next = new Node('You');

var list = new SinglyListedList();
list.push('Hi');
list.push('there');
list.push('How');
list.push('Are');
list.push('You');


//console.log(list.get(2));
//console.log(list.set(2,'Woohoh'));
//console.log(list.get(2));
console.log(list.insert(1,'sexy'));
console.log(list.get(1));
console.log(list.remove(1));