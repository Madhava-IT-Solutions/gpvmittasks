import React, { useState } from 'react';
import axios from 'axios';

import "./Feed.css"

const FeedbackForm = ( props) => {
  const {submitFeedback,submitted} = props;
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit-feedback', formData);
      alert('Feedback submitted successfully!');
      submitFeedback(true)
      setFormData({ name: '', contact: '', feedback: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
      submitFeedback(false)
    }
  };

  return (
    <form className='feed' onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className='feedback-heading'>Please Provide Your Feedback</h2>
      <div className='inputContainer'>
        <label>Name</label>
        <input
        className='input'
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='inputContainer'>
        <label>Phone/Email</label>
        <input
        className='input'
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div className='inputContainer'>
        <label>Feedback</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button className='submit' type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
