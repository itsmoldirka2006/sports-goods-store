const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  total_price: { type: Number, required: true },
  status: { type: String, enum: ["processing", "shipped", "delivered"], default: "processing" },
  order_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
