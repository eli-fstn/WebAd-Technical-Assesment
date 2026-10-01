const express = require("express")
const todos = require("./database.js")

const app = express()
const PORT = 3000

app.use(express.json())

app.get("/", (req, res) => {
  // TODO: Return the list of todos
})

app.post("/", (req, res) => {
  // TODO: Add a new todo to the list
})

app.put("/:id", (req, res) => {
  // TODO: Update an existing todo by id
})

app.delete("/:id", (req, res) => {
  // TODO: Delete a todo by id
})

app.listen(PORT, async () => {
  console.clear()
  console.log(`Server is running on http://localhost:${PORT}`)
})