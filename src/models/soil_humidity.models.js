const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SoilHumiditySchema = new Schema(
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
    value: {
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

const SoilHumidity = mongoose.model("SoilHumidity", SoilHumiditySchema);

module.exports = SoilHumidity;
