const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DiseasePredictSchema = new Schema(
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
    image: {
      type: String,
      // required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const DiseasePredict = mongoose.model("DiseasePredict", DiseasePredictSchema);

module.exports = DiseasePredict;
