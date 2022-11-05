const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")
//middleware
app.use(cors());
app.use(express.json())// => allows access to req.body


//routes
// -----------------------
//get all todos


// -------------------------
//get a single todo


//----------------------------
//create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [description]);

    res.json(newTodo.rows[0])
    // res.json(req.body)
  } catch (err) {
    console.error(err.message)
  }
})

//--------------------------
//update a todo


//-----------------------------------
//delete a todo


//------------------------------------------


app.listen(5000, () => {
  console.log("Server listening on port 5000");
});