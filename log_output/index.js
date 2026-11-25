const { randomUUID } = require("crypto");
const express = require("express");

const randomStringOnStartUp = randomUUID();

const DEFAULT_PORT = 3000;

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

const server = app.listen(port, () => {
  console.info(`Server started in port ${server.address().port}`);
});

app.get("/", (request, response) => {
  response.send(`${new Date().toISOString()}: ${randomStringOnStartUp}`);
});






