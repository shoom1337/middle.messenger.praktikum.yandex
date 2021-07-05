const express = require("express");

const PORT = 3000;

const app = express();

app.listen(PORT, function () {
  console.log(`Server has been started on http://localhost:${PORT}`);
});
