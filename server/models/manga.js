const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mangaSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model("Manga", mangaSchema);