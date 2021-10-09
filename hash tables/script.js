/*function hash(key,arrayLen){
    let total = 0;
    for(let char of key){
        // 'a' to 1, 'b' to 2, 'c' to 3 etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;

    }
    return total;
}

/// REFINING YOUR HASH
//Reduce collisions
//Not constant time- linear in key length
//Could be more litte random

// The prime number in the hash is helpful in spreading out the keys more uniformly

function hashVisited(key,arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length,100);i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}
*/
/**
 * Set
 * Accepts a key and a value
 * Hashes the key
 * Stores the key value pair in the hash table array via seperate chaining
 * 
 * Get
 * Accepts a key
 * Hashes the key
 * Retrieves the key value pair in the hash table
 * If the key isnt found,return undefined
 * 
 * Keys
 * Loop through the hash table array and returns an array of keys in table
 * 
 * Values
 * Loop through the hash table array and returns an array of values in the table
 * 
 * BIG O OF HASH
 * (average case)
 * INSERTION O(1)
 * DELETION O(1)
 * ACCESS O(1)
 */

class HashTable{
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length,100);i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
    }
    set(key,value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i];
                }
            }
        }
        return undefined;

    }
    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length;j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys(){
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length;j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();
ht.set('maroon','#800000');
ht.set('yellow','#ffff00');
ht.set('olive','#808000');
ht.set('salmon','#fa8072');
ht.set('lightcoral','#f08080');
ht.set('mediumvioletred','#c71585');
ht.set('plum','#dda0dd');

ht.keys().forEach(function(key){
    console.log(ht.get(key));
})