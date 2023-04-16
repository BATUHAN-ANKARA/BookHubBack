const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: Schema.Types.String,
      required: true
    },
    fullName: {
      type: Schema.Types.String,
      required: true
    },
    birthDate: {
      type: Schema.Types.Date,
      required: true
    },
    email: {
      type: Schema.Types.String,
      required: false
    },
    password: {
      type: Schema.Types.String,
      required: false,
      min: 4
    },
    avatar: {
      type: Schema.Types.String,
      required: false
    },
    age: {
      type: Schema.Types.Number,
      required: false
    },
    likedBooks: [
      {
        type: Schema.Types.ObjectId,
        ref: "LikedPost",
        required: false
      }
    ]
  },
  {
    minimize: true,
    timestamps: true,
    autoIndex: true
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
