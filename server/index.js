const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")
//middleware
app.use(cors());
app.use(express.json())// => allows access to req.body

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});