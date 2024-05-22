const fs = require("fs");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("mkidr created");
  });
}

process.on("uncaughtException", (err) => {
  console.log(`Error here: ${err} `);
  process.exit(1);
});
