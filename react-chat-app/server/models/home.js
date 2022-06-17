const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  img: [String],
});

module.exports = model("Home", schema);
