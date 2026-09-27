import mongoonse from "mongoose"

// create a schema for notes
const noteSchema = new mongoonse.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
        type: String,
            required: true
        }
    }, {timestamps: true} // createdAt, updatedAt
);  

// creating a model based off schema
const Note = mongoonse.model("Note", noteSchema);

export default Note;