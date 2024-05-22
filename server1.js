const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const fileOpers = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "start.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "content.txt"),
      "hai bro files are created"
    );
    console.log("Write Complete!");
    await fsPromises.appendFile(
      path.join(__dirname, "files", "content.txt"),
      "\n \n Nandri!!! Thanks"
    );
    console.log("append complete!");
    await fsPromises.rename(
      path.join(__dirname, "files", "content.txt"),
      path.join(__dirname, "files", "news.txt")
    );
    console.log("rename complete!");
    await fsPromises.unlink(path.join(__dirname, "files", "start.txt"));
    console.log("deleted!");
  } catch (err) {
    console.error(err);
  }
};

fileOpers();

process.on("uncaughtException", (err) => {
  console.log(`Error here: ${err} `);
  process.exit(1);
});
