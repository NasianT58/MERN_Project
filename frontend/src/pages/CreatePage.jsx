import { ArrowLeftIcon } from 'lucide-react';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

const CreatePage = () => {
  const {title, setTitle} = useState('');
  const {content, setContent} = useState('');
  const {loading, setLoading} = useState(false);

  const handleSubmit = () => {

  }
  return (
    <div className="min-h-screen bg-base-200">
      <div classname="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5"/>
            Back to Home Page 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePage