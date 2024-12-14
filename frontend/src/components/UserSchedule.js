import React, { useState, useEffect } from 'react';
import API from '../utils/api';

const UserSchedule = ({ userId }) => {
  const [appointments, setAppointments] = useState([]);

  // Fetch user's appointments
  useEffect(() => {
    API.get(`/appointments/user/${userId}`)
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, [userId]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Your Scheduled Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500">No appointments scheduled yet.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment._id}
              className="p-4 border rounded-lg bg-white shadow-sm"
            >
              <p>
                <strong>Doctor Name:</strong> {appointment.doctor.name}
              </p>
              <p>
                <strong>Specialization:</strong> {appointment.doctor.specialization}
              </p>
              <p>
                <strong>Appointment Date:</strong>{' '}
                {new Date(appointment.date).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserSchedule;
