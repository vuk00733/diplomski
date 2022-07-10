let mongoose = require("mongoose");

let BuyerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  items: [{
    name: { type: String, required: true },
    id: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    image: { type: String, required: true },
  }],
});

module.exports = mongoose.model("Buyer", BuyerSchema);
