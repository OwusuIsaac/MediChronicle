import React, { useState } from "react";
import "./InputMedical.css";
const ConsultationForm = ({ onAddConsultation }) => {
  const [consultationDetails, setConsultationDetails] = useState({
    patientName: "",
    diagnosis: "",
    advices: "",
    prescription: "",
    date: "",
    time: "",
    doctorName: "",
    doctorContact: "",
    doctorAddress: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setConsultationDetails((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setConsultationDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddConsultation(consultationDetails);
    setConsultationDetails({
      patientName: "",
      diagnosis: "",
      advices: "",
      prescription: "",
      date: "",
      time: "",
      doctorName: "",
      doctorContact: "",
      doctorAddress: "",
      attachment: null,
    });
    // Normally here you would also have code to send the data to a server
    alert("Consultation summary added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Patient Name:
        <input
          type="text"
          name="patientName"
          value={consultationDetails.diagnosis}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Diagnosis:
        <input
          type="text"
          name="diagnosis"
          value={consultationDetails.diagnosis}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Advices/Practices:
        <textarea
          name="advices"
          value={consultationDetails.advices}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Prescription:
        <input
          type="text"
          name="prescription"
          value={consultationDetails.prescription}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={consultationDetails.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={consultationDetails.time}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Doctor Name:
        <input
          type="text"
          name="doctorName"
          value={consultationDetails.doctorName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Doctor Contact:
        <input
          type="text"
          name="doctorContact"
          value={consultationDetails.doctorContact}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Doctor Address:
        <input
          type="text"
          name="doctorAddress"
          value={consultationDetails.doctorAddress}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Attach Report:
        <input type="file" name="attachment" onChange={handleChange} />
      </label>
      <button type="submit">Add Consultation Summary</button>
    </form>
  );
};

export default ConsultationForm;
