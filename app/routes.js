const router = require("express").Router();

router.use("/api/v1/tickets", require("../routes/ticketRouter"));

// this this must have route
router.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

module.exports = router;
