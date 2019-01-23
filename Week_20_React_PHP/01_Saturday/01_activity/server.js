const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const db = require("./models");

mongoose.connect('mongodb://localhost/crm',() => {
  console.log('connected to db:crm');
});
const app = express();
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// this could go into a routes file and require routes.
app.get("/api/customers", (req,res) => {
  db.Customer.fid({})
  .then((customers) =>{res.json(customers)})
  .catch(() => res.end());
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
