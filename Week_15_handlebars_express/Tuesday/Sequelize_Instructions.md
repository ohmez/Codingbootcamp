* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
	  -an npm to work with sql, creates and populates data from your database.
	  	lets you write the code in javascript to build the sql code/database/schema.


  	- Answer: What advantages does it offer?
		hopefully will require less knowledge of sql syntax or only writting it once then calling back to it. 
  	- Answer: How do I install it? How do I incorporate it into my app?
		npm install sequelize
  	- Answer: What the heck is a Sequelize model? What role will it play?
		Model seems to be an architype for creating a table that'll be created again. 
  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
			```js
			const Countries = sequelize.define('countries', {
				country: Sequelize.STRING,
				phonecode: Sequelize.INTEGER,
				capital: Sequelize.STRING,
				independYear: Sequelize.INTEGER
			})
			```
  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		  Model.findAll({
			  where: {
				  independYear: {
					  [Op.between]: [1968,2018]
				  }
			  }
		  });
		  or
		  tableName.FindAll({
			  where: {
				  independYear: {$gt: new Date().getFullYear() - 50}
			  }
		  });

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)
		  Model.findAll({
			  order: [
				  ['id', 'DESC'],
				  [sequelize.fn('max',
				  sequelize.col('age')), 'DESC']
			  ],
			  offset: 2,
			  limit: 2
		  })

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
