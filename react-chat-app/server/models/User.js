const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  chatId: { type: String, default: "[]" },
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

module.exports = model("Admin", schema);
