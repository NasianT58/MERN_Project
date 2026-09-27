import express from "express"
import noteRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"

// configuring dotenv to use .env file
dotenv.config()

// creating express app
const app = express()

// using .env variable for PORT, if not available, default to 5001
const PORT = process.env.PORT || 5001

// function to connect to data base
connectDB();

// middleware to parse JSON request bodies
app.use(express.json())

// prefix them with "/api/notes" for methods in notesRoutes.js
app.use("/api/notes", noteRoutes)

// listening on port
// "() ==> " arrow syntax for function, defining the function inside of the listen method
app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
})