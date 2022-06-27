const express = require("express");
const app = express();
const PORT = 80;

app.get("/", (req, res) => {
  res.send("OK - GET: Request completed\n");
});

app.post("/", (req, res) => {
  res.send("OK - POST: Request completed\n");
});

app.put("/", (req, res) => {
  res.send("OK - PUT: Request completed\n");
});

app.delete("/", (req, res) => {
  res.send("OK - DELETE: Request completed\n");
  });  

var server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});