const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function () {
  console.log(`Server has been started on http://localhost:${PORT}`);
});
