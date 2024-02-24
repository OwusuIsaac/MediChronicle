import React from "react";
import "./HomePage.css"; // Create and use HomePage.css for styling

const HomePage = ({
  userName,
  testResults,
  appointments,
  medications,
  doctors,
}) => {
  return (
    <div className="home-page">
      <section className="welcome-section">
        <h2>Welcome, {userName}</h2>
      </section>
      <div className="home-content">
        <section className="test-results">
          <h3>Last Test Results:</h3>
          {testResults.map((test, index) => (
            <div key={index}>
              <p>
                {test.date}: {test.type} - {test.result}
              </p>
            </div>
          ))}
        </section>
        <section className="recent-appointments">
          <h3>Recent Appointments:</h3>
          {appointments.map((appointment, index) => (
            <div key={index}>
              <p>
                {appointment.date} at {appointment.time} with{" "}
                {appointment.doctor} ({appointment.specialty})
              </p>
            </div>
          ))}
        </section>
        <section className="current-medications">
          <h3>Current Medications:</h3>
          {medications.map((medication, index) => (
            <div key={index}>
              <p>
                {medication.name} - {medication.dosage} - {medication.frequency}
              </p>
            </div>
          ))}
        </section>
        <section className="my-doctors">
          <h3>My Doctors:</h3>
          {doctors.map((doctor, index) => (
            <div key={index}>
              <p>
                {doctor.name} - {doctor.specialty}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
