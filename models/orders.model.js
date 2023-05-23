const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    userFullName: {
      type: String,
      required: true
    },
    status: {
      type: Schema.Types.Number,
      default: 0
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
        },
        bookName: {
          type: Schema.Types.String,
          required: true
        },
        bookImage: {
          type: Schema.Types.String,
          required: false
        }
      }
    ],
    totalPrice: {
      type: Schema.Types.Number,
      required: true
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Orders = mongoose.model("Orders", ordersSchema, "orders");

module.exports = Orders;
