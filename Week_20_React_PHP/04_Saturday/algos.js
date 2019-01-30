var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

function algoFind(a,i) {
    for(x=0; x<a.length; x++) {
        a[x] === i? console.log(i, 'found at index', x) : '';
    }
};

algoFind(stuff,random_value);