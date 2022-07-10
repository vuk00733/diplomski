let mongoose = require("mongoose");

let StoreItemSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model("StoreItem", StoreItemSchema);
