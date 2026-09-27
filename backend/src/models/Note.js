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
// this generates an object that inherits from Mongoose base Model class with methods
const Note = mongoonse.model("Note", noteSchema);

// this file's main export is this one thing, which is why default
// we do not need other named exports
export default Note;