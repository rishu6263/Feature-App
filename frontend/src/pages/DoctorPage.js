
import React, { useState, useEffect } from 'react';
import API from '../utils/api';

const DoctorPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get('/appointments')
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Doctor Dashboard</h2>
      <ul className="mt-4 space-y-4">
        {appointments.map((app) => (
          <li key={app._id} className="p-4 border rounded-lg bg-white">
            <p><strong>User:</strong> {app.user.name}</p>
            <p><strong>Time:</strong> {new Date(app.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorPage;
