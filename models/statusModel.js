const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "No status",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Status = mongoose.model("status", statusSchema);

module.exports = Status;
