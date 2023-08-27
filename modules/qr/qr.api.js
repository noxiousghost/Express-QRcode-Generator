const router = require("express").Router();
const QRController = require("./qr.controller");

router.post("/", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) throw new Error("URL xaina bro.");
    const data = await QRController.createQR(url);
    res.json({ data });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
