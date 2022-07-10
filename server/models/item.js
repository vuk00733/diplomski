let mongoose = require("mongoose");

let ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  img: { type: String, required: true },
});

module.exports = mongoose.model("Item", ItemSchema);
