function Pet () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if(this.hungry) {
            console.log("that was yummy, thanks for feeding me");
            this.hungry = !this.hungry;
            this.sleepy = true; 
        }
        if(!this.hungry) {
            console.log("no thanks I'm full");
        }
    }

    this.sleep = function() {
        if(this.sleepy) {
            console.log("I'm goin.. t..ZzzzZzz");
            this.sleepy = !this.sleepy;
            this.bored = true;
            this.increaseAge();

        }
        if(!this.sleepy) {
            console.log("no way I'm wide awake");
        }
    }

    this.play = function() {
        if(this.bored) {
            console.log("Im so down to play, I'm bored AF");
            this.bored = !this.bored;
            this.hungry = true;
        }
        if(!this.bored) {
            console.log("I'm busy biatchh lets play later");
        }
    }
    this.increaseAge = function () {
        console.log("Another day in life goes by"+ "I'm so old..." +this.age+" wow");
        this.age += 1;
    }
}// end pet constructor

var dog = new Pet();
    dog.outside = false;
    dog.bark = function () {
        console.log("bark bark c9");
    };
    dog.goOutside = function() {
        if(!this.outside) {
            console.log("yayy freeedomm");
            this.outside = !this.outside;
            this.bark();
        }
        if(this.outside) {
            console.log("we're already outside");
        }
    };
    dog.goInside = function() {
        if(this.outside) {
            console.log("bark bark but whyyy");
            this.outside = !this.outside;            
        }
        if(!this.outside) {
            console.log("I am inside, do u think I want to be inside still? ");
        }
    };
var cat = new Pet();
    cat.houseCondition = 100;
    cat.meow = function() {
        console.log("meee owwww");
    }
    cat.destroyFurniture = function() {
        if (this.houseCondition <= 0) {return}
        cat.houseCondition -= 10;
        console.log("muahaha evil cat kills furniture");
        this.bored = false;
        this.sleepy = true; 
    }
