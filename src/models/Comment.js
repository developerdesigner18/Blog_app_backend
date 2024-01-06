const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Comment = new mongoose.Schema(
  {
    content: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", Comment);
