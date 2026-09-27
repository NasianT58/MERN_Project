import express from "express";
// import the methods from notesController.js
import { getNotes, createNote, updateNote, deleteNote, getNotesByID } from "../controllers/notesController.js";

// create a router object to define routes
const router = express.Router();

// paths are relative to wherever this router is mounted in
router.get("/", getNotes);

router.get("/:id", getNotesByID);

router.post("/", createNote);

// would like to know what post is updated/deleted using ":id"
router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;