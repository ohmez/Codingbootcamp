var express = require("express");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
  {
    animalType: "dog",
    pet: true,
    fierceness: 4
  }, {
    animalType: "cat",
    pet: true,
    fierceness: 10
  }, {
    animalType: "giraffe",
    pet: false,
    fierceness: 4
  }, {
    animalType: "zebra",
    pet: false,
    fierceness: 8
  }, {
    animalType: "lion",
    pet: false,
    fierceness: 10
  }
];

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!
res.render("dog", animals[0]);
  // 1. Send the dog object from the animals array to the dog.handlebars file.

});

app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.
  var pets = [];
  for(x=0; x<animals.length; x++) {
    if(animals[x].pet === true) {
      pets.push(animals[x]);
    }
  }
  res.render('index',{
    input: pets
  });
  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.

});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 3. Send all the animals that are not pets to the index.handlebars file.
  var non_pets = [];
  for(x=0; x<animals.length; x++) {
    if(animals[x].pet === false) {
      non_pets.push(animals[x]);
    }

  }
  res.render('index',{
    input: animals.filter(function(animals) {
        return animals.pet === false
        })
  });
// res.render('index',{
//   input: non_pets
// });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});