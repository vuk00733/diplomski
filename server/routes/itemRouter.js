const express = require("express");
const router = express.Router();
const Item = require("../models/storeItems");

// Getting all
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one
router.get("/:id", getItem, (req, res) => {
  res.json(res.item);
});

// Creating one
router.post("/", async (req, res) => {
  const item = new Item({
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Getting item by id and putting it into res, only thing next does is when we reach it just go
//to the next part of the code where we called it from
async function getItem(req, res, next) {
  let item;
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "Cannot find subscriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.item = item;
  next();
}

module.exports = router;
