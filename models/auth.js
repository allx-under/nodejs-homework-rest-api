const { Schema, model } = require("mongoose");

const authSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", authSchema);

module.exports = User;
