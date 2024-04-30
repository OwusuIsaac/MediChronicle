import React from "react";
import DoctorCard from "../components/DoctorCard";
import "./DoctorsPage.css";

const patientDoctors = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Primary Care Physician",
    description:
      "Dr. Smith has been your family doctor for the last 10 years, known for her caring approach and comprehensive care.",
    contact: {
      phone: "555-0100",
      email: "dr.smith@clinic.com",
      address: "123 Health St., Wellness City, 12345",
    },
    nextAppointment: "2024-04-15T14:00:00Z",
  },
  {
    id: 2,
    name: "Dr. Raymond Holt",
    specialty: "Cardiologist",
    description:
      "Specializing in cardiovascular health, Dr. Holt offers expert care in heart disease prevention and management.",
    contact: {
      phone: "555-0200",
      email: "dr.holt@heartspecialists.com",
      address: "456 Cardiac Ave., Wellness City, 12345",
    },
    nextAppointment: "2024-05-20T10:00:00Z",
  },
  {
    id: 3,
    name: "Dr. Rosa Diaz",
    specialty: "Dermatologist",
    description:
      "Dr. Diaz provides state-of-the-art care for skin conditions and is an expert in both medical and cosmetic dermatology.",
    contact: {
      phone: "555-0300",
      email: "dr.diaz@skinsolutions.com",
      address: "789 Derm Ave., Wellness City, 12345",
    },
    nextAppointment: "2024-06-10T13:00:00Z",
  },
  {
    id: 4,
    name: "Dr. Amy Santiago",
    specialty: "Neurologist",
    description:
      "With a focus on neurological disorders, Dr. Santiago is dedicated to helping patients manage complex conditions.",
    contact: {
      phone: "555-0400",
      email: "dr.santiago@braincare.com",
      address: "321 Neural Path, Wellness City, 12345",
    },
    nextAppointment: "2024-07-22T09:00:00Z",
  },
  {
    id: 5,
    name: "Dr. Terry Jeffords",
    specialty: "Orthopedic Surgeon",
    description:
      "As an experienced orthopedic surgeon, Dr. Jeffords specializes in sports injuries and joint replacement surgeries.",
    contact: {
      phone: "555-0500",
      email: "dr.jeffords@boneandjoint.com",
      address: "654 Musculoskeletal Rd., Wellness City, 12345",
    },
    nextAppointment: "2024-08-30T15:00:00Z",
  },
];

const DoctorsPage = () => {
  return (
    <div className="doctors-page">
      <h1>My Doctors</h1>
      {patientDoctors.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsPage;
