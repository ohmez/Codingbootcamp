// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}
function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }

// ================================================
// SOLUTION - Insertion Sort
function insertionSort(array) {

    var i;
    var j;
    for(i = 0; i < array.length; i++) {
        var value = array[i];
        for(j = 1 - 1; j > -1 && array[j] > value; j--) {
            array[j+1] = items[j];
        }
    }
    // let lNum = 0;
    // let len = array.length;
    // for(i=0; i < len; i++) {
    //     let cIndex = i;
    //     for(x=i+1; x>0<len; x++) {
    //         if(array[x]>array[cIndex]) {
    //             x++
    //             cIndex
    //         }
            
    //             let temp = array[x];
    //             array[x] = array[i];
    //             array[i] = temp;
    //         }
    //     }
    // }
    // return array
}
// start at index 0
// is 1 < 0
// ================================================


// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
