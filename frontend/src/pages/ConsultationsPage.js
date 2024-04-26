import React, { useState, useEffect } from "react";
import "./ConsultationsPage.css";
import { useUserContext } from "../contexts/UserContext"; // Ensure this is the correct path to your UserContext

const API_BASE_URL = "http://localhost:3001"; // Change this according to your environment setup

const ConsultationsPage = () => {
  const [medicalEntries, setMedicalEntries] = useState([]);
  const { user } = useUserContext(); // Make sure to get the correct user property for identification

  useEffect(() => {
    const fetchMedicalEntries = async () => {
      try {
        console.log("Fetching medical entries for user:", user?.userName); // Log the username being used for the fetch

        // Use the user's name or a unique identifier to fetch their medical entries
        const response = await fetch(
          `/api/medical-entries?patientName=${encodeURIComponent(
            user.userName
          )}`
        );
        if (!response.ok) {
          console.log("Response not ok", response); // Log the response if not ok
          throw new Error("Network response was not ok");
        }
        const entries = await response.json();
        console.log("Fetched entries:", entries); // Log fetched entries
        setMedicalEntries(entries);
      } catch (error) {
        console.error("There was a problem fetching medical entries:", error);
      }
    };

    if (user?.userName) {
      fetchMedicalEntries();
    }
  }, [user]); // Dependency array ensures this effect runs when user state changes

  return (
    <div className="consultations-page">
      <h1>My Medical History</h1>
      {medicalEntries.length ? (
        medicalEntries.map((entry) => (
          <div key={entry._id} className="medical-entry-card">
            <h3>Consultation at {entry.hospitalName}</h3>
            <p>
              <strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}
            </p>

            <p>
              <strong>Symptoms:</strong> {entry.symptoms}
            </p>

            <p>
              <strong>Diagnosis:</strong> {entry.diagnosis}
            </p>

            <div>
              <strong>Prescriptions:</strong>
              {entry.prescription.length ? (
                <ul>
                  {entry.prescription.map((presc, index) => (
                    <li key={index}>
                      {presc.medication} - {presc.dosage}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>N/A</p>
              )}
            </div>

            {entry.nonPharmacologicalTreatments && (
              <p>
                <strong>Non-Pharmacological Treatments:</strong>{" "}
                {entry.nonPharmacologicalTreatments}
              </p>
            )}

            <p>
              <strong>Follow-up Instructions:</strong>{" "}
              {entry.followUpInstructions}
            </p>

            <p>
              <strong>Doctor Name:</strong> {entry.doctorName}
              <br />
              <strong>Specialization:</strong> {entry.doctorSpecialization}
              <br />
              <strong>Contact:</strong> {entry.doctorContact}
            </p>

            <div className="attachments">
              <strong>Attachments: </strong>
              {entry.attachments.length
                ? entry.attachments.map((attachment, index) => (
                    <a
                      key={index}
                      href={`${API_BASE_URL}/${attachment}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Document {index + 1}
                    </a>
                  ))
                : " None"}
            </div>
          </div>
        ))
      ) : (
        <p>No medical history found.</p>
      )}
    </div>
  );
};

export default ConsultationsPage;
