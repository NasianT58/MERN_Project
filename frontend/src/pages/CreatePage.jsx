import { ArrowLeftIcon } from 'lucide-react';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router'
import toast from 'react-hot-toast'
import axios from 'axios'

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); {/* prevent page from refreshing every submission */}
    
    if(!title.trim() || !content.trim()) { {/* check if title or content is empty */}
      toast.error("Please fill in both the title and content fields.");
      return;
    }

    setLoading(true);

    try{
      await axios.post("http://localhost:5001/api/notes", { title, content }); {/* send the title and content to the backend */}
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
      if (error.response.status === 429) { /* check if the error is due to rate limiting */
        toast.error("Slow down! You're creating notes too quickly.", { duration: 4000 }); {/* show a toast notification for rate limiting */}
      } else {
        toast.error("Failed to create note")
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5"/>
            Back to Home Page 
          </Link>
          {/* Card for creating a new note */}
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                {/* Content input field */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <input type="text"
                    placeholder="Note Content"
                    className="input input-bordered"
                    value={content}
                    onChange={(e) => setContent (e.target.value)}
                  />
                </div>
                {/* Submit button */}
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating..." : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage