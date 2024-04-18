import React from "react";
import "./Doctorhomepage.css"; // Ensure this path matches your CSS file's location

const Card = ({ title, children }) => (
  <div className="card">
    <h3>{title}</h3>
    {children}
  </div>
);

const DoctorhomePage = ({
  userName,
  myPatients,
  consultations,
  chatWithDoctor,
}) => {
  return (
    <div className="doctor-home-page">
      <section className="welcome-section">
        <h2>Welcome, Dr. {userName}</h2>
      </section>
      <div className="home-content">
        {/* My Patients Section */}
        <Card title="My Patients">
          {myPatients && myPatients.length > 0 ? (
            myPatients.map((patient, index) => (
              <p key={index}>
                {patient.name} - {patient.condition}
              </p>
            ))
          ) : (
            <p>No patients found.</p>
          )}
        </Card>

        {/* Consultations Section */}
        <Card title="Consultations">
          {consultations && consultations.length > 0 ? (
            consultations.map((consultation, index) => (
              <p key={index}>
                {consultation.date} - {consultation.time} with
                {consultation.patient} ({consultation.condition})
              </p>
            ))
          ) : (
            <p>No consultations found.</p>
          )}
        </Card>

        {/* Chat with Doctor Section */}
        <Card title="Chat with Doctor">
          {chatWithDoctor && chatWithDoctor.length > 0 ? (
            chatWithDoctor.map((chat, index) => (
              <p key={index}>
                {chat.date} - {chat.time} with {chat.patient}
              </p>
            ))
          ) : (
            <p>No chats found.</p>
          )}
        </Card>
        <Card title="Related Doctors">
          {chatWithDoctor && chatWithDoctor.length > 0 ? (
            chatWithDoctor.map((chat, index) => (
              <p key={index}>
                {chat.date} - {chat.time} with {chat.patient}
              </p>
            ))
          ) : (
            <p>No Related Doctors.</p>
          )}
        </Card>
      </div>
    </div>
  );
};

export default DoctorhomePage;
