import React, { useState } from 'react';
import API from '../utils/api';

const AppointmentForm = () => {
  const [form, setForm] = useState({
    userId: '',
    doctorId: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post('/appointments/create', form)
      .then((res) => alert('Appointment booked successfully!'))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="text"
        name="userId"
        placeholder="User ID"
        className="input"
        onChange={handleChange}
      />
      <input
        type="text"
        name="doctorId"
        placeholder="Doctor ID"
        className="input"
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="date"
        className="input"
        onChange={handleChange}
      />
      <button type="submit" className="btn-primary">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
