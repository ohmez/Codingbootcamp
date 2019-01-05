## 1/3/2019 Class Notes on Mongodb
To run mongodb you must have `c:\data\db` this folder tree must exist.
Then you must run command `mongod` or `mongod.exe` which can be found searching your applications.
Leave this running it seems, open another command prompt or bash and run `mongo` command, this will establish the database connections. 
inside that terminal you can run commands:
`help` `db.help()` 
`show dbs` `show collections` `show profiles`

### Activity 1
I'm finally able to start on it after some refreshing on `mongod` and getting everything running.

First task is to complete the routes.
on the `app.post()` for the new book I thought to do a `db.books.insert(book)` which is what we've learned of mongoDB.
In the example run through we they do
```js
db.books.save(book, (error,saved) => {
    if(error) {
        console.log(error);
    } else {
        res.send(saved);
    }
});
```

Once we do the finds then we move on to an update, this is the first time we see the mongoDB ID:
```js
db.books.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      // Set "read" to true for the book we specified
      $set: {
        read: true
      }
    },
    // When that's done, run this function
    function(error, edited) {
      // show any errors
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the result of our update to the browser
        console.log(edited);
        res.send(edited);
      }
    }
  );
```
update model goes db.collection.update({parameter to find item to update}, {what to update on the item}, (callback))

### Activity 2
We review an example of setting up schemas with mongoose and mongoDb.
This is very similar to the schema's or models for sequelize.
We go over an example and the schemas are built in object references as well.
```js
var UserSchema = new Schema({
username: {
     type: String,
     trim: true,
   },
   password: {
     type: String,
     trim: true,
     required: true,
     validate: [function(input){ return input.length>=6;}, "Password must be 6 characters at least"]
   },
   email: {
     type: String,
     match:  [/.+@.+\..+/, "Please enter a valid e-mail address"],
   },
   userCreated: {
     type: Date,
     default: Date.now
   }
});
var User = mongoose.model("User", UserSchema);
module.exports = User;
```
### Activity 3 
We now add on some methods to our db schema. 
these allow us to perform functions on the users data before we send it in the response. 
we create functions in the schema model and then call to them in the server routes.
```js
 var user = new User(req.body);
  user.setFullName();
  user.lastUpdatedDate();
```
These are called on the server and then ran on the model
```js
UserSchema.methods.setFullName = function() {
  this.fullName = this.firstName +' '+this.lastName;
  return this.fullName;
};
// 2. lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()
UserSchema.methods.lastUpdatedDate = function() {
  this.lastUpdated = Date.now();
  return this.lastUpdated;
};
```
Week 18 Day 3 has the examples.
