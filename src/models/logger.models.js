const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LoggerSchema = new Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    iot_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Iot",
      required: true,
    },
    temperature_id: {
      type: String,
      ref: "Temperature",
      required: true,
    },
    air_humidity_id: {
      type: String,
      ref: "AirHumidity",
      required: true,
    },
    soil_humidity_id: {
      type: String,
      ref: "soilHumidity",
      required: true,
    },
    diseasePredict_id: {
      type: String,
      ref: "diseasePredict",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

const Logger = mongoose.model("Logger", LoggerSchema);

module.exports = Logger;
