const express = require("express");

const PORT = 8000;

const app = express();

app.use(express.static("./public"));

app.listen(PORT, function () {
  console.log(`app listening on http://localhost:${PORT}`);
});
