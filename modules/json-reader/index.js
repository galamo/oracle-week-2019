const fs = require("fs");

function productsRead(path) {
  const jsonData = fs.readFileSync(path, "utf8");
  try {
    return JSON.parse(jsonData);
  } catch (ex) {
    console.log("JSONreader-Error: failed to parse json");
    return `return error: ${ex.message}`;
  }
}

module.exports = { readJson };
