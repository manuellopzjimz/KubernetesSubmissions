const express = require("express");
const fs = require("fs");
const path = require("path");

const LOG_FILE = "ping-pong.log";

const DEFAULT_PORT = 3000;

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

let counter = 0;

const server = app.listen(port, () => {
  console.info(`Server started in port ${server.address().port}`);
});

app.get("/pingpong", (request, response) => {
  try {
    const countAssociatedToRequest = counter;
    counter++;
    const logFile = path.join(__dirname, "files", LOG_FILE);
    fs.writeFileSync(logFile, countAssociatedToRequest.toString(), "utf-8");
    response.send(`pong ${countAssociatedToRequest}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    response.send("An error occurred while writing log file.");
  }
});





