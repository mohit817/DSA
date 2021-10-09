/**
 * Adding a vertex
 * Write a method called addVertex, which accepts a name of the vertex
 * It should add a key to the adjacency list with the name of the vertex and set its value to be empty array
 */
/**
 * Adding an edge
 * This function should accept two vertices, we call vertex1 and vertex2
 * The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
 * The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
 */
/**
 * Removing an edge
 * This function should accept two vertices we call them vertex1 and vertex2
 * The function should reassign the key of vertex1 to be an array that does not contain vertex2
 * The function should reassign the key of vertex2 to be an array that does not contain vertex1
 */
/**
 * Removing a vertex
 * The function should accept a vertex to remove
 * The function should loop as long as there are any other vertices in the adjacency list for that matrix
 * Inside of  the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
 * Delete the key in the adjacency list for that vertex
 */
/**
 * Graph transversal
 * 
 * Depth First transversal
 * Recursively
 * The funciton should accept a starting node
 * Create a list to store the end result, to be returnes at very end
 * Create an object to store visited vertices
 * Create a helper function  which accepts a vertex
 * The helper function should return early if vertex is empty
 * The helper function should place the vertex it accepts  into the visited object and push the vertex into result array
 * Loop over all the values in the adjacency list for that vertex
 * If any of those values have not been visited, recursively invoke the helper function  with that vertex
 * 
 * Depth First transversal
 * Iteratively
 * The function should accept a starting node
 * Create a stack to help use keep track of vertices(use a list/array)
 * Create a list to store the end result,to be returned at the very end
 * Create an object to store visited vertices
 * Add the starting vertex to the stack and mark it visited
 * While the stack has something in it
 * Pop the next vertex from the stack
 * If that vertex hasnt been visited yet
 * Mark it as visited
 * Add it to the results list
 * Push all of its neighours into the stack
 * Return the result array
 * 
 * Breadth first Transversal
 * The function should accept a starting vertex
 * Create a queue(you can use a array) and place the starting vertex in it
 * Create an array to store nodes visited
 * Create  an object to store nodes visited
 * Mark the starting vertex as visited
 * Loop as long as  there is anything in a queue
 * Remove the first vertex from the queue and push it into the array that stores nodes visited
 * Loop over each vertex in adjacency list for the vertex you are visiting
 * If it is not inside the object that  stores nodes visited mark it as visited and enqueue that vertex
 * Once you have finished looping return the array of visited nodes
 */


class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighour => {
                if(!visited[neighour]){
                    return dfs(neighour);
                }
            })

        })(start);
        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighour => {
                if(!visited[neighour]){
                    visited[neighour] = true;
                    stack.push(neighour);
                }
            });
        }
        return result;
        
    }
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighour => {
                if(!visited[neighour]){
                    visited[neighour] = true;
                    queue.push(neighour);

                }
            });
        }
        return result;
    }
}
let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');

console.log(g.depthFirstRecursive('A'));
console.log(g.depthFirstRecursive('B'));
console.log(g.depthFirstRecursive('C'));
console.log(g.depthFirstRecursive('D'));
console.log(g.depthFirstRecursive('E'));
console.log(g.depthFirstRecursive('F'));

console.log(g.depthFirstIterative('A'));
console.log(g.depthFirstIterative('B'));
console.log(g.depthFirstIterative('C'));
console.log(g.depthFirstIterative('D'));
console.log(g.depthFirstIterative('E'));
console.log(g.depthFirstIterative('F'));

console.log(g.breadthFirst('A'));
console.log(g.breadthFirst('B'));
console.log(g.breadthFirst('C'));
console.log(g.breadthFirst('D'));
console.log(g.breadthFirst('E'));
console.log(g.breadthFirst('F'));

//       A
//      / \
//     B    C
//    /     \
//   D ------ E
//    \      /
//     \    /
//        F