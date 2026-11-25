const express = require("express");

const DEFAULT_PORT = 3000;

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

let counter = 0;

const server = app.listen(port, () => {
  console.info(`Server started in port ${server.address().port}`);
});

app.get("/pingpong", (request, response) => {
  response.send(`pong ${counter++}`);
});

