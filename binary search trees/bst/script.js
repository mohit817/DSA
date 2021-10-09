/*
HOW BINARY SEARCH TREES WORK

Every parent node has atmost two children
Every node to the left of a parent node is always less than than parent
Every node to the right of a parent node is always greater than parent 

Inserting a node

Create a new node
Starting at the root
Check if there is a root if not then the new node becomes root
If there is a root check if the value of new node is greater than or less than value of root
If it is greater
-Check to see if there is a node to the right
-If there is move to the node and repeat the steps
-If there is not, add that node as a right property
If it is less
-Check to see if there is a node to the left
-If there is, move to that node and repeat these steps
-If there is not,add that node as left property
RETURN THE TREE

FINDING A NODE IN BST TREE

Starting at the root
Check if there is a root if not we are done searching
If there is a root check the value of the new node is the value we are looking for,
If we found it we are done
If not check to see if the value is greater than or less than value of the root
If it is greater
-Check to see if there is a node to the right
- If there is,move to that node and repeat these steps
-If there is not, we are done searching
If it is less, then repeat the same instead of moving node to right move left


BIG O NOTATION 

INSERTION O(LOG N)
SEARCHING O(LOG N)

TREES TRANSVERSAL
1. breadth first search
(visiting and exploration of a node)
2. depth first search

BFS 
Iteratively
Create a queue(that can be array) and a variable to store values of nodes visited
Place the root node in the queue
Loop as long as there is anything in the queue
Dequeue a node from the queue and push the value of node into the variable that stores the nodes
If there is a left property on the node dequeued- add it into the queue
If there is a right property on the node dequeued- add it into the dequeue
Return the variable that stores values


//       10
//    3      15
//  6   8       20

// output [10,3,15,6,8,20]

DFS Pre order
Steps - Recursively

Create a variable to store the values of nodes visited
Store the root of BST in a variable called current
Write a helper function which accepts a node
Push the value of node to the varaible that stores the variables
If node has left property call the helper function with left property on that node
If node has right property call the helper function with right property on that node
Invoke the helper function with the current variable
Return the array of variables

// output [10,3,6,8,15,20]

DFS Post order
Steps - Recursively

Create a variable to store the values of nodes visited
Store the root of BST in a variable called current
Write a helper function which accepts a node
If node has left property call the helper function with left property on that node
If node has right property call the helper function with right property on that node
Push the value of node to the varaible that stores the variables
Invoke the helper function with the current variable
Return the array of variables


Depth First Traversals: 
(a) Inorder (Left, Root, Right)
(b) Preorder (Root, Left, Right) 
(c) Postorder (Left, Right, Root)


*/

 

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                    }else{
                        current = current.left;
                    }
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                    }else{
                        current = current.rigth;
                    }
                }
            }
        }
    }

    find(value){
        if(this.root === null) return false;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(value > current.value){
                current = current.right;
            }else if(value < current.value){
                current = current.left;
            }else{
                found = true;
            }
        }
        return true;
    }

    BFS(){
        var queue = [];
        var node = this.root;
        queue.push(node);
        var visited = [];
        while(queue.length){
            node = queue.shift();
            visited.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return visited;
    }
    DFSPreOrder(){
        var current = this.root;
        var data = [];
        function transverse(node){
            data.push(node.value);
            if(node.left) transverse(node.left);
            if(node.right) transverse(node.right);
        }
        transverse(current);
        return data;
    }
    DFSPostOrder(){
        var current = this.root;
        var data = [];
        function transverse(node){
            if(node.left) transverse(node.left);
            if(node.right) transverse(node.right);
            data.push(node.value);
        }
        transverse(current);
        return data;
    }
    DFSInOrder(){
        var current = this.root;
        var data = [];
        function transverse(node){
            if(node.left) transverse(node.left);
            data.push(node.value);
            if(node.right) transverse(node.right);            
        }
        transverse(current);
        return data;
    }
}

//         10
//    5         13
// 2   7      11   16

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
//tree.root = new Node(10);
//tree.root.right = new Node(15);
//tree.root.left = new Node(7);
//tree.root.left.right = new Node(9);