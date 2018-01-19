function Set(arr1, arr2) {
    var arr3 = arr1.concat(arr2);
    var newArr = [];
    for(var i = 0; i < arr3.length; i++) {
        if(newArr.length == 0) {
            newArr.push(arr3[0]);
            continue;
        }
        var condition = true;
        for(var k = 0; k < newArr.length; k++) {
            if(arr3[i] == newArr[k]) {
                condition = false;
            }
        }
        if(condition == true) {
            newArr.push(arr3[i]);
        }
    }
    return newArr;
}
var arr1  = [1, 2, 3, 3 , 1 , 5, 4];
var arr2 = [4, 5, 6, 1, 1, 4, 6, 10];
console.log(Set(arr1, arr2));