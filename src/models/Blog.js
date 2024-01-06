const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Blog = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", Blog);
