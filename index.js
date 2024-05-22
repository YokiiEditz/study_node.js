const logEvents = require("./logEvent");

const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("log", (msg) => {
  logEvents(msg);
});

myEmitter.emit("log", "Message event is here! ");
