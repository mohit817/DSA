// Simple priority Queue

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2,weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
    Dijkstra(start,finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];

        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }
        //console.log(distances);

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                                
                //WE ARE DONE
                //BUILD UP PATH TO RETURN END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || smallest !== Infinity){
                for(let neighour in this.adjacencyList[smallest]){
                    // FIND NEIGHOURING NODE
                    let nextNode = this.adjacencyList[smallest][neighour];
                    //console.log(nextNode);
                    //Calculate new distance to neighouring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighour = nextNode.node;
                    if(candidate < nextNeighour){
                        //update new smallest distance to neighour
                        distances[nextNeighour] = candidate;
                        //update previous- How we got to neighour
                        previous[nextNeighour] = smallest;
                        //enqueue in priority  queue with newPriority
                        nodes.enqueue(nextNeighour,candidate);
                    }
                }
            }

        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A','B',4);
graph.addEdge('A','C',2);
graph.addEdge('B','E',3);
graph.addEdge('C','D',2);
graph.addEdge('C','F',4);
graph.addEdge('D','E',3);
graph.addEdge('D','F',1);
graph.addEdge('E','F',1);

console.log(graph.Dijkstra('A','E'));

console.log(graph.adjacencyList);

