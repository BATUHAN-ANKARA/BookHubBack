const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    books: [
      {
        bookId: {
          type: Schema.Types.String,
          required: true
        },
        quantity: {
          type: Schema.Types.Number,
          required: true
        },
        price: {
          type: Schema.Types.Number,
          required: true
        }
      }
    ]
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Cart = mongoose.model("Cart", cartSchema, "cart");

module.exports = Cart;
