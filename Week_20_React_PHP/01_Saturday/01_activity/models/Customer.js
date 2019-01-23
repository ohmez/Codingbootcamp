const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
const Customer = Mongoose.model("Customer", CustomerSchema);
module.exports = Customer;
