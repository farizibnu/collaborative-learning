import React, { useState } from 'react';
import axios from 'axios';

const TEST = () => {
  const [fullName, setFullName] = useState('');
  const [shortName, setShortName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/webservice/rest/server.php', null, {
        params: {
          wstoken: '1738e0b4745935356603b5554e45dbd0',
          moodlewsrestformat: 'json',
          wsfunction: 'core_course_create_courses',
          'courses[0][fullname]': fullName,
          'courses[0][shortname]': shortName,
          'courses[0][categoryid]': categoryId
        }
      });
      console.log(response.data); // Output response from the API
      setMessage('Course created successfully!');
    } catch (error) {
      console.error('Error creating course:', error);
      setMessage('Failed to create course. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="shortName">Short Name:</label>
          <input
            type="text"
            id="shortName"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categoryId">Category ID:</label>
          <input
            type="text"
            id="categoryId"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          />
        </div>
        <button type="submit">Create Course</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TEST;
