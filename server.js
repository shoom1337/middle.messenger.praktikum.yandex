const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => res.sendFile("index.html", { root: __dirname + "/dist" }));

app.listen(PORT, function () {
  console.log(`listening on: http://localhost:${PORT}`);
});
