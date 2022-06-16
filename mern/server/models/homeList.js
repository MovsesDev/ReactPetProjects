const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  img: [String],
  owner: { type: String },
});

module.exports = model("HomeList", schema);
