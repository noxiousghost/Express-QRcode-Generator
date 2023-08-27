const QRcode = require("qrcode");

const createQR = async (data) => {
  const result = await QRcode.toDataURL(data);
  return result;
};

module.exports = { createQR };
