
let testArray = [201, 39, 54, 461, 93, 377, 413, 176, 164, 317, 109, 113, 36, 235, 17, 60, 53, 474, 257, 48];

function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function example(a) {
    let i = 0;
    let len = a.length;
    for(i=0; i < len; i++ ) {
       let minIndex = i;
        for (x=i+1; x < len; x++) {
            if(a[x] < a[minIndex]) {
                minIndex = x;
            }
        }
        swap(a,i,minIndex);
    }
    return a;
}

console.log('unsorted\n', testArray);
console.log('\n sorted', example(testArray));