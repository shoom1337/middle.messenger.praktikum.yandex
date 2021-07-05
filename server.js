const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.static("./dist"));

app.listen(PORT, function () {
  console.log(`app listening on http://localhost:${PORT}`);
});
