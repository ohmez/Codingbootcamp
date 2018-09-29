// Initialize Firebase (YOUR OWN APP)
var config = {
  apiKey: "AIzaSyBAtdwxnmKQSihcb6tj99iSZFCYJij6FKA",
  authDomain: "fukaround-28acc.firebaseapp.com",
  databaseURL: "https://fukaround-28acc.firebaseio.com",
  projectId: "fukaround-28acc",
  storageBucket: "fukaround-28acc.appspot.com",
  messagingSenderId: "614494525735"
};
firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;
var database = firebase.database();

// --------------------------------------------------------------

$(document).ready(function() {
  load();
})
// At the initial load, get a snapshot of the current data.
function load () {
  database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    clickCounter = snapshot.val().clickCount;
    $("#click-value").text(snapshot.val().clickCount);
  }, function(errorObject) {
    console.log("the read failed: " + errorObject.code);
  });
}




// Print the initial data to the console.


// Change the html to reflect the initial value.
$("#click-value").text(initialValue);


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;


  // Alert User and reset the counter
  if (clickCounter === 0) {
    

  }

  // Save new value to Firebase


  // Log the value of clickCounter


});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue


  // Save new value to Firebase


  // Log the value of clickCounter


  // Change the HTML Values

});
