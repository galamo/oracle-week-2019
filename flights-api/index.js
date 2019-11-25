const express = require("express");
require("dotenv").config();
const galamoModule = require("galamo-products-account");
const { PORT, SECRET } = process.env;
console.log(PORT, SECRET);

const app = express();

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
