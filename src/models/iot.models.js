const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IotSchema = new Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
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

const Iot = mongoose.model("Iot", IotSchema);

module.exports = Iot;
