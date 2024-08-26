const express = require("express");
const router = express.Router();
const All = require("../models/single");

router.get("/", async (req, res) => {
  try {
    const sample = await all.find();
    res.json(sample);
  } catch (err) {
    res.send("Error" + err);
  }
});

router.post("/", async (req, res) => {
  const all = new All({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const a1 = await all.save();
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
