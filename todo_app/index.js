const express = require("express");
const path = require("path");

const DEFAULT_PORT = 3000;

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

if (!port) {
  throw new Error("Port value is missing");
}

const server = app.listen(port, () => {
  console.info(`Server started in port ${server.address().port}`);
});

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});


