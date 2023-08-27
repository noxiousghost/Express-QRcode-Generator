const router = require("express").Router();
const qrApiRoute = require("../modules/qr/qr.api");

router.get("/", (req, res) => {
  res.send("This is the API");
});

router.use("/qr", qrApiRoute); //if there is /qr in the url then send that request to qrApiRoute which is the api endpoint for qrcode generator

module.exports = router;
