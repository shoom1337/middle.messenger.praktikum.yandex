const express = require("express");
const Bundler = require("parcel-bundler");

const file = "./static/index.html";
const PORT = 3000;

const app = express();

const bundler = new Bundler(file, { watch: true, cache: false });

app.use(bundler.middleware());

app.listen(PORT, function () {
  console.log(`app successfully started on http://localhost:${PORT}`);
});
