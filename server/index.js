import express from "express"
import mongoose from "mongoose"
import "dotenv/config"

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
