import React, { useState } from 'react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to your server.
  };

  return (
    <div className="bg-blue-50 p-8 m-8 mt-2 md:flex items-center justify-center">
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <h1 className="text-4xl font-bold my-8">Let's Get in Touch</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We would love to hear from you. If you have any questions, suggestions, or feedback,
          please use the form on the right to get in touch with us.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <form onSubmit={handleSubmit} className="max-w-md p-4 space-y-4 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <div className="form-group">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
