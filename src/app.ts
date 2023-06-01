import express from "express";
const app : Application = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello From University!')
})

export default app;
