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
    bookId: {
      type: String,
      required: true
    },
    bookName: {
      type: String,
      required: true
    },
    ownerId: {
      type: String,
      required: false
    },
    ownerFullName: {
      type: String,
      required: false
    },
    cost: {
      type: Number,
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
