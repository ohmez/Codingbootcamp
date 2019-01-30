// Benchmark is a library that times
var Benchmark = require("benchmark");
var generate = require("../shared/generate");

function binary(a,v) {
  let m = a.length;
  let h = a.length/2;
  let t = [];
  v > a[h]? t = a.split(h)[1] : t = a.split(h)[0];
  v > (t[t.length/2]) ? t = t.split((t.length/2))[1] : t = t.split((t.length/2));
  for(x=0; x<t.length; x++) {
    t[x] === v? true:false;
  }
};

// Generate an array of the given length.
var length = 100000000;
var stuff = generate(length).sort();
var randomValue = stuff[Math.ceil(Math.random() * length)];

// A "suite" is a series of code snippets you
//   want to execute and time.
var suite = new Benchmark.Suite();

suite
// Add the function 'linearSearch' to the suite.
  .add("Linear Search", function linearSearch() {
    for(x=0; x<stuff.length; x++) {
      stuff[x] === randomValue? true : false;
  }})
  // On 'start', run the 'start' function.
  .on("start", function start() {
    console.log("Beginning benchmark...");
  })

  // On the 'complete' event, run the 'report' function.
  .on("complete", function report() {
    // Get successful benchmark.
    var benchmark = Benchmark.filter(this, "successful")[0];

    console.log("On average, " + benchmark.name + " took " + benchmark.stats.mean + " seconds to complete.");
  })

  // Run the test!
  .run();
