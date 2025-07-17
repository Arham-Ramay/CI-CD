// index.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express on AWS EC2! i am arham";
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
