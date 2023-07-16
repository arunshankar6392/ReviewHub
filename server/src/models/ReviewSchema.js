const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const ReviewSchema = new Schema({
  ShowName: { type: String, required: true },
  Characters: [{ type: String, required: true }],
  Review: { type: String, required: true },
  imageURL: { type: String, required: true },
  rating: { type: Number, required: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

module.exports = mongoose.model("review", ReviewSchema);
