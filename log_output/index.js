const { randomUUID } = require("crypto");
const express = require("express");
const fs = require("fs");
const path = require("path");

const LOG_FILE = "ping-pong.log";
const DEFAULT_PORT = 3000;

const randomStringOnStartUp = randomUUID();

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

const server = app.listen(port, () => {
  console.info(`Server started in port ${server.address().port}`);
});

app.get("/", (request, response) => {
  try {
    const logFile = path.join(__dirname, "files", LOG_FILE);
    const pingPongCounter = fs.readFileSync(logFile, "utf-8");
    response
      .type("text/plain")
      .send(`${new Date().toISOString()}: ${randomStringOnStartUp}\nPing / Pongs: ${pingPongCounter}`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    response.send("An error occurred while retrieving log file.");
  }
});




















