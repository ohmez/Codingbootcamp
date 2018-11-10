to use mysql in javascript you can install npm mysql

```js
var connection = mysql.createConnection({})
```
this requires an object to be passed in
```js
createConnection({
host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "ice_creamDB"
});
```

inquirer prompt in combination with sql was very tricky. 
inquirer didn't seem to populate results as I'd expect as a list from an array that's generated in a function. 
