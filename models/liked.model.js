const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likedSchema = new Schema(
  {
    bookName: {
      type: Schema.Types.String,
      required: true
    },
    bookId: {
      type: Schema.Types.String,
      required: false
    },
    ownerId: {
      type: Schema.Types.String,
      required: false
    },
    ownerFullName: {
      type: Schema.Types.String,
      required: false
    },
    price: {
      type: Schema.Types.Number,
      required: false
    }
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const Liked = mongoose.model("Liked", likedSchema, "liked");

module.exports = Liked;
