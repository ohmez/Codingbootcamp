function logMessage (message, cb) {
    console.log(message);
    cb();
};
logMessage('hello', function () {
    console.log('got here');
});
function runIf (func, bool) {
    if(bool) {
        func();
    }
};
logMessage('First callback', function() {console.log('worked');});
runIf(function() {
    console.log("ran if truthy");
},true);

function joe (cb, val) {
    return function () {
        return cb(val);
    }
};

// joe(function(a) {
//     return a*a;
// },5);
// Below is the solution to the commented out above error.
var fn = joe(function(a) {
    return a * a;
},5);
console.log(fn());
// or 
console.log(joe(function(a){return a*a;},5)());
