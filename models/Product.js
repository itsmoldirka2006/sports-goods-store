const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  price: { type: Number, required: true },
  product_link: { type: String, required: true },
  swatches: [
    {
      color_code: String,
      color_name: String,
    },
  ],
});

module.exports = mongoose.model("Product", ProductSchema);
