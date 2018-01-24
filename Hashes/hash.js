var hash = function(string, max){
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

let HashTable = function(){
    let storage =[];
    const storageLimit = 4;
    
    // this.print = function() {
    //     console.log(storage);
    // }

    this.prototype.add = function(key, value){
        // get the index by running hash function
        var index = hash(key, storageLimit);
        // if storage array is empty at index
        if(storage[index] === null) {
            // set [key, value] at index
            storage[index] = [
                [key, value]
            ];
        } else{ // if there's something in storage
            var inserted = false;
            // going through each array
            for(var i = 0; i < storage[index].length; i++) {
                // if the key already exists in the array at index
                // 0 index is the key
                // 1 index is the value
                if(storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            // if the key does not exist in the array at that index
            if(inserted === false) {
                storage[index].push([key, value]);
            }
        }
    }

    this.prototype.remove = function(key) {
        // example: key = 3
        var index = hash(key, storageLimit); 
        // index = 2

        if(storage[index].length === 1 && storage[index][0][0] === key) {
            storage[index].splice(0, 1);
        }
        // [ [0: "0"], [1: "1"], [2:"2", 3:"2"] ]
        // [ [[0, "0"]], [[1, "1"]], [[2,"2"], [3,"2"]] ]
        // going through the index 
        for(var i = 0; i < storage[index].length; i++) {            
            // if [2:"2", 3:"2"][0][0] == key
            if(storage[index][i][0] === key) {
                // remove one array at that index of array
                storage[index].splice(i, 1);
            }
        }
    }

    this.prototype.findKey = function(key) {
        var index = hash(key, storageLimit);
        // 3 is index

        if(storage[index] === null){
            return null;
        }
        // go to the index, loop through the array in the index
        for(let i = 0; i < storage[index].length; i++){
            if(storage[index][i][0] === key){
                return storage[index][i][1];
            } else{
                return null;
            }
        }
    }
}

// console.log(hash("quincy", 10));

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("re", "dinosour");
ht.add("tux", "penguin");
console.log(ht.findKey("tux"));
console.log(ht);