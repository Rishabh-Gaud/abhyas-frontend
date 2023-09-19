
"use client"


import React, { useState } from 'react';

const MyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    title: '',
    location: '',
    imageUrl: '',
    type: '',
    redirectLink: '',
    requiredExperience: '',
    salary: '',
    skills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add createdAt to formData
    const createdAt = new Date().toISOString();
    const dataToSend = { ...formData, createdAt };

    // Send data to your server (you need to implement the server endpoint)
    try {
      const response = await fetch('http://localhost:8082/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        
          // Handle success, e.g., show a success message
    
          // Clear all input values by resetting formData
          setFormData({
            companyName: '',
            title: '',
            location: '',
            imageUrl: '',
            type: '',
            redirectLink: '',
            requiredExperience: '',
            salary: '',
            skills: '',
          });
        
        // Handle success, e.g., show a success message
      } else {
        // Handle errors, e.g., show an error message
      }
    } catch (error) {
      // Handle network or server errors
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold">Job Posting Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-600">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="title" className="block text-gray-600">Job Post Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="location" className="block text-gray-600">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="imageUrl" className="block text-gray-600">Company logo link</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="type" className="block text-gray-600">Type</label>
          <input
            type="text"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="redirectLink" className="block text-gray-600">Link for the Job Post</label>
          <input
            type="text"
            id="redirectLink"
            name="redirectLink"
            value={formData.redirectLink}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="requiredExperience" className="block text-gray-600">Required Experience</label>
          <input
            type="text"
            id="requiredExperience"
            name="requiredExperience"
            value={formData.requiredExperience}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="salary" className="block text-gray-600">Expected Salary</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
          <label htmlFor="skills" className="block text-gray-600">Skills Required</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        {/* Repeat the above pattern for other form fields */}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyPage;
