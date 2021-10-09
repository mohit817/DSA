class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(value,priority){
        let newNode = new Node(value,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(true){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element.priority > parent.priority) break;
            this.values[idx] = parent;
            this.values[parentIdx] = element;
            idx = parentIdx;
                          
            
        }
    }
    dequeue(){
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
                if(leftChild.priority > element.priority){
                    swap = leftChildIdx;
                }

            }
            if(rightChild < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)){
                        swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
        }

    }
}


let ER = new PriorityQueue();
ER.enqueue('common cold',1);
ER.enqueue('gunshot wound',5);
ER.enqueue('high fever',2);
ER.enqueue('broken arm',4);
ER.enqueue('glass in foot',3);