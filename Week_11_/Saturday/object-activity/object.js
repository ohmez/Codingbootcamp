var dogs = {};
dogs.raining = false;
if(process.argv[2]) {dogs.raining = JSON.parse(process.argv[2]);}
dogs.noise = "Woof!";
dogs.makeNoise = function() {
    if(dogs.raining) {
     console.log(dogs.noise)
    }
};
var cats = {};
cats.raining = false;
if(process.argv[3]) {cats.raining = JSON.parse(process.argv[3]);}
cats.noise = "Meow";
cats.makeNoise = function () {
    if(cats.raining) {
        console.log(cats.noise);
    }
};
dogs.makeNoise();
cats.makeNoise();
if(JSON.parse(cats.raining)&& JSON.parse(dogs.raining)) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
}
if(!process.argv[2]) {
    console.log(" please provide true or false for each 2 available arguments");
}
