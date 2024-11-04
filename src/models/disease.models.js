const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DiseaseSchema = new Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    logger_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Logger",
      required: true,
    },
    DiseaseName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Disease = mongoose.model("Disease", DiseaseSchema);

module.exports = Disease;
