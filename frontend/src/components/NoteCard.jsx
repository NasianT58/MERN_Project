import React from 'react'
import { Link } from 'react-router'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import api from "../lib/axios.js"
import toast from "react-hot-toast"

const NoteCard = ({ note, setNotes }) => {
    const handleDelete = async (e, noteId) => {
        e.preventDefault(); // Prevent the default link behavior (navigate to page)

        if(!window.confirm("Are you sure you want to delete this note?")) {
            return; // Exit if the user cancels the deletion
        }

        try {
            await api.delete(`/notes/${noteId}`); // Send a DELETE request to the backend
            setNotes((prev) => prev.filter(note => note._id !== noteId)) // get rid of the deleted note from arary
            toast.success("Note deleted successfully!"); // Show a success toast notification
        } catch (error) {
            console.error("Error deleting note:", error);
            toast.error("Failed to delete note"); // Show an error toast notification
        }
    }
    return (
      <Link to={`/notes/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200
        border-t-4 border-solid border-[#00FF9D]">
        <div className="card-body">
            <h3 className="card-title text-base-content">{note.title}</h3>
            <p className="text-base-content/70">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">
                    {note.createdAt}
                </span>
                <div className="flex items-center gap-1">
                    <PenSquareIcon className="size-4"/>
                    <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id)}>
                        <Trash2Icon className="size-4"/>
                    </button>
                </div>
            </div>
        </div>
      </Link>
    )
}

export default NoteCard