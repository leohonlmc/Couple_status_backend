const express = require("express");
const router = express.Router();
const statusController = require("./controllers/statusController");

router.get("/status/:id", statusController.getStatus);
router.patch("/status/update/:id", statusController.updateStatus);

module.exports = router;
