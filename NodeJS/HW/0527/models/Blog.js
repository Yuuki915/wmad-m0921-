const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  timeCreated: {
    type: Date,
    default: () => Date.now(),
  },
  slug: {
    type: String,
    slug: "title",
    unique: true,
    slug_padding_size: 2,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
