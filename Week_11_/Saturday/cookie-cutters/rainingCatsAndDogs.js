function Animal (raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function () {
        if(this.raining == true)
        console.log(this.noise);
    }
};
var dogs = new Animal(true,"bark bark");
var cats = new Animal(true, "Meeee OWWWWW");
dogs.makeNoise();
cats.makeNoise();


