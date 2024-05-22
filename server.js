const http = require("http");
const PORT = 3005;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Page is not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Server is running on " + PORT);
  }
});
