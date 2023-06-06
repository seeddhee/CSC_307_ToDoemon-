const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    pet: {
      type: Object,
      required: true,
      trim: true,
    },
  },
  { collection: "Users" }
);

const User = mongoose.model("Taskemon", UserSchema);

module.exports = User;
