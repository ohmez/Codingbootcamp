function Champ (name, gender, age, strength, hp) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {
        console.log(JSON.stringify(this,null,1));
    }
    this.attack = function (enemy) {
        enemy.hp = enemy.hp - this.strength;
    }
    this.isAlive = function() {
        if (this.hp >0 ) {
            return true;
        } else {
            return false; 
        }
    }
}; // end object creator. 


var naruto = new Champ('naruto','male', 21,7,200);
var hinata = new Champ('hinata','female', 21, 12, 140);
var characters = [];
for (x =0; x <10; x++) {
    characters.push(new Champ(x,'bot',2,20));
}
while (naruto.isAlive() && hinata.isAlive()) {
    if(!naruto.isAlive() || !hinata.isAlive()) {
        console.log("fights over");
        naruto.printStats();
        hinata.printStats();
    } else {
    naruto.attack(hinata);
    hinata.printStats();
    hinata.attack(naruto);
    naruto.printStats();
    }
}// end while function 


