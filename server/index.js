import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import userRouter from "./routes/user.route.js"

const app = express()
const port = 3000
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

app.use("/api/user", userRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})
