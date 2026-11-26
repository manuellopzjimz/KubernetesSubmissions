const { randomUUID } = require("crypto");
const express = require("express");
const fs = require("fs");
const path = require("path");

const randomStringOnStartUp = randomUUID();

const DEFAULT_PORT = 3000;
const INTERVAL_TO_LOG_STRING = 5000;
const LOG_FILE = "random-string.log";

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

const isLoggingEnabled = process.env.IS_LOGGING_ENABLED === "true";

if (isLoggingEnabled) {
  console.info(`Started log_output as log writer`);
  const logFile = path.join(__dirname, "files", LOG_FILE);
  setInterval(() => {
    console.info("Appending new line in log");
    fs.appendFileSync(logFile, `${new Date().toISOString()}, ${randomStringOnStartUp}\n`);
  }, INTERVAL_TO_LOG_STRING);

  return;
}

const server = app.listen(port, () => {
  console.info(`Started log_output as log reader`);
  console.info(`Server started in port ${server.address().port}`);
});

app.get("/", (request, response) => {
  try {
    const logFile = path.join(__dirname, "files", LOG_FILE);
    response.type("text/plain").send(fs.readFileSync(logFile, "utf-8"));
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    response.send("An error occurred while retrieving log file.");
  }
});



















