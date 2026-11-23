const { randomUUID } = require("crypto");

const INTERVAL_TO_PRINT_STRING = 5000;

const randomStringOnStartUp = randomUUID();

setInterval(() => {
  console.info(new Date().toISOString(), randomStringOnStartUp);
}, INTERVAL_TO_PRINT_STRING);

