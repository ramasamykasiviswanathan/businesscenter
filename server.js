const path = require("path");
const express = require("express");
const app = express(); // create express app
const compression = require("compression");
const host = "0.0.0.0";
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));
app.use(compression());
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("server started on port 5000");
});
