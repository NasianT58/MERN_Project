// runtime: node.js
// framework: express
// dev tools: nodemon
import express from "express"
import noteRoutes from "./routes/notesRoutes.js"
// creating express app
const app = express()

// prefix them with "/api/notes" for methods in notesRoutes.js
app.use("/api/notes", noteRoutes)

// listening on port
// "() ==> " arrow syntax for function, defining the function inside of the listen method
app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
})