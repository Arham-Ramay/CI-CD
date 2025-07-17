// index.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("OK FINALLY UPDATED well know");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
