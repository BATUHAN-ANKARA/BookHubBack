const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const storeSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    owner: {
      type: Schema.Types.String,
      required: true
    },
    location: {
      type: Schema.Types.String,
      required: true
    },
    date: {
      type: Schema.Types.Date,
      required: false
    },
    books: [
      {
        type: Schema.Types.String,
        required: false
      }
    ],
    description: {
      type: Schema.Types.String,
      required: true 
    },
    email: {
      type: Schema.Types.String,
      required: true
    },
    phone: {
      type: Schema.Types.String,
      required: true
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Store = mongoose.model("Store", storeSchema, "store");

module.exports = Store;
