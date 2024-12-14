import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import UserSchedule from '../components/UserSchedule';

const UserPage = () => {
  const [userId, setUserId] = useState("USER_ID_HERE"); // Replace with actual user ID

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Book an Appointment</h3>
          <AppointmentForm userId={userId} />
        </div>

        <div>
          <UserSchedule userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
