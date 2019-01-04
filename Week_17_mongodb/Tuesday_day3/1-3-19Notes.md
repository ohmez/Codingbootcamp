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

37 minutes in 7:09PM on the time on recording stopping point. [video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=94a9b7f3-e0eb-4658-b3ce-a9cb001928b4)

First activity completed, next looks to be example of mongoose. 