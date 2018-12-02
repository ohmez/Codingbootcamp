module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  return sequelize.define('post', {
    title:
        {type:DataTypes.STRING,
        validate: {
          notEmpty:true,
          len: [2,160],}
        },
    body:
        {type:DataTypes.TEXT,
        validate: {
          notEmpty: true,
          len: [4,300],}
        },
    category:
        {type:DataTypes.STRING,
        validate: {
          notEmpty:true,}
        }
  },{freezeTableName:true});
};
