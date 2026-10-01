import express from "express"
import noteRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js"

// configuring dotenv to use .env file
dotenv.config()

// creating express app
const app = express()

// using .env variable for PORT, if not available, default to 5001
const PORT = process.env.PORT || 5001

// middleware to parse JSON request bodies
// without it, req.body is undefined since information arrives as raw text streaming in over the connection
app.use(express.json());

// custom middle ware
app.use(rateLimiter);

app.use((req, res, next) => {
    console.log(`We got a request from ${req.method} in ${req.url}`);
    next();
});

// prefix them with "/api/notes" for methods in notesRoutes.js
app.use("/api/notes", noteRoutes)


// wrapping the connectDB call in a promise to ensure the server starts only after the database connection is established
connectDB().then(() => {
    // listening on port
    // "() ==> " arrow syntax for function, defining the function inside of the listen method
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});
