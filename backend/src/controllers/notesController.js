import Note from "../models/Note.js";

// export keyword used to make the function/variable/etc available to other files
export async function getNotes(_, res) { // async, allowed to use await
    try {
        const notes = await Note.find().sort( {createdAt: -1} ); // find all notes; pause here until MongoDB responds, unwrap result in "notes"; notes show up by recency first (-1)
        res.status(200).json(notes); // send notes as JSON response; runs only after notes is ready
    } catch (error) { // runs if Note.find() throws/rejects
        console.error("Error in fetching notes:", error);
        res.status(500).json({message: "Server error fetching notes"});
    }
}

// the req and res parameter created by Express for every incoming request
// - node receives raw request from whatever client and wraps in a req object organized in convenient fields
// - also creates a res object, which is tool for sending responses back to that client
export async function getNotesByID(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({message: "Note not found."});
        }
        res.json(note);
    } catch (error) {
        console.error("Error in fetching specific note:", error);
        res.status(500).json({message: "Server error fetching notes"});
    }
}

export async function createNote(req, res) {
    try {
        const {title, content} = req.body; // by using req body, attaches data sent by request using POSTMAN on post method
        const newNote = new Note({title, content}); // create new note object
        const savedNote = await newNote.save(); // save to MongoDB, pause here until MongoDB responds
        res.status(201).json(savedNote); // send response to client
    } catch (error) {
        console.error("Error in creating note:", error);
        res.status(500).json({message: "Error creating note"});
    }
}

export async function updateNote(req, res) {
    try {
        const {title, content} = req.body; // will update what you have passed
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content});
        if (!updatedNote) { // if id of note doesn't exist
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error updating note", error);
        res.status(500).json({message: "Error updating note."});
    }
}

export async function deleteNote(req, res) {
    try {
        // using delete request with certain id, will delete it
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) { // if id of note doesn't exist
            return res.status(404).json({message: "Note not found"});
        }
        res.status(200).json({message: "Note deleted successfully!"});
    } catch (error) {
        console.error("Error updating note", error);
        res.status(500).json({message: "Error deleting note."});
    }
}