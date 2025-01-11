import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitForm } from '../redux/reducers';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm(formData));
    navigate('/summary');
  };

  return (
    <div>
      <h2>Form Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
