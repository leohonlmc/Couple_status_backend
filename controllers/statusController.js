const { stat } = require("fs");
const Status = require("../models/statusModel");

module.exports.getStatus = async (req, res) => {
  try {
    const status = await Status.findOne({ user: req.params.id });
    res.status(200).json(status);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateStatus = async (req, res) => {
  try {
    console.log(req.body);
    const status = await Status.findOneAndUpdate(
      { user: req.params.id },
      { status: req.body.status, created: Date.now() },
      { new: true }
    );

    status.save();

    res.status(200).json(status);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
