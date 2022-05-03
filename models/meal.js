const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    item: String,
    price: Number,
})

module.exports = mongoose.model('Meal', mealSchema);