const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: Schema.Types.String,
      required: false
    },
    fullName: {
      type: Schema.Types.String,
      required: true
    },
    birthDate: {
      type: Schema.Types.Date,
      required: false
    },
    email: {
      type: Schema.Types.String,
      required: true
    },
    password: {
      type: Schema.Types.String,
      required: true,
      min: 4
    },
    avatar: {
      type: Schema.Types.String,
      required: false
    },
    city: {
      type: Schema.Types.String,
      required: false
    },
    county: {
      type: Schema.Types.String,
      required: false
    },
    neighbourhood: {
      type: Schema.Types.String,
      required: false
    },
    generalAddress: {
      type: Schema.Types.String,
      required: false
    },
    apartmentNumber: {
      type: Schema.Types.String,
      required: false
    },
    doorNumber: {
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
        ref: "Liked",
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
