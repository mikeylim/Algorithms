// MINHEAP constructor
function MinHeap(){
    this.data = [];
}
// size
MinHeap.prototype.size = function(){
    return this.data.length;
}
// contains
MinHeap.prototype.contains = function(val){
    for(var x in this.data){
        if(val === this.data[x]){
            return true;
        }
    }
    return false;
}
// isEmpty
MinHeap.prototype.isEmpty = function(){
    if(this.data.length === 0){
        return true;
    }
    return false;
}
// top
MinHeap.prototype.top = function(){
    return this.data[0];
}
// swap
MinHeap.prototype.swap = function(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// insert
MinHeap.prototype.insert = function(val){
    var arr = this.data;
    arr.push(val);
    var curr = arr.length - 1;
    while(curr > 0){
        var parent = Math.floor((curr - 1) / 2);
        if(arr[parent] > arr[curr]){
            this.swap(arr, parent, curr);
            curr = parent;
        } else{
            break;
        }
    }
}
// extract
MinHeap.prototype.extract = function(){
    var arr = this.data;
    var curr = 0, minPos = 0;
    this.swap(arr, curr, arr.length - 1);
    var min = arr.pop();
    var leftChild = 2 * curr + 1;
    var rightChild = 2 * curr + 2;
    while(arr[curr] > arr[leftChild] || arr[curr] > arr[rightChild]){
        if(arr[leftChild] > arr[rightChild]){
            minPos = rightChild;
        } else{
            minPos = leftChild;
        }
        if(arr[curr] > arr[minPos]){
            this.swap(arr, curr, minPos);
            curr = minPos;
            leftChild = 2 * curr + 1;
            rightChild = 2 * curr + 2;
        } else{
            return min;
        }
    }
}
// test
var myHeap = new MinHeap();
myHeap.data = [4,5,2,6];
myHeap.insert(1);

console.log("inserting 1 -- ", myHeap);
myHeap.insert(14);
console.log("inserting 14 -- ", myHeap);
myHeap.insert(8);
console.log("inserting 8 -- ", myHeap);
myHeap.insert(7);
console.log("inserting 7 -- ", myHeap);
myHeap.extract();
console.log("extracting minimum value -- ", myHeap);
myHeap.extract();
console.log("extracting minimum value -- ", myHeap);

console.log("size = ", myHeap.size());
console.log("14 in the heap? = ", myHeap.contains(14));
console.log("isEmpty = ", myHeap.isEmpty());
console.log("top = ", myHeap.top());