const express = require("express");
const Bundler = require("parcel-bundler");

const PORT = 3000;

const app = express();

const bundler = new Bundler("static/index.html", { watch: true, cache: false });

app.use(bundler.middleware());

app.listen(PORT, function () {
  console.log(`listening on: http://localhost:${PORT}`);
});
