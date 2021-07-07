const express = require("express");

const PORT = 3000;

const app = express();

// TODO to be removed
// const Bundler = require("parcel-bundler");
// const bundler = new Bundler("static/index.html", { watch: true, cache: false });
// app.use(bundler.middleware());

app.use(express.static("dist"));

app.get("*", (req, res) =>
  res.sendFile("index.html", { root: __dirname + "/dist" })
);

app.listen(PORT, function () {
  console.log(`listening on: http://localhost:${PORT}`);
});
