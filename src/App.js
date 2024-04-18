import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
// import Account from "./pages/Account";
import DoctorsPage from "./pages/DoctorsPage";
import InsurancePage from "./pages/InsurancePage";
import HomePage from "./pages/HomePage";
import ConsultationsPage from "./pages/ConsultationsPage";
import ImmunizationsPage from "./pages/ImmunizationsPage";
import MedicationsPage from "./pages/MedicationsPage";
import AccountSettings from "./pages/AccountSettings"; // Import AccountSettings component
import Radiology from "./pages/Radiology"; // Import AccountSettings component
import Doctorhomepage from "./pages/Doctorhomepage";
import InputMedical from "./pages/InputMedical";

import "./App.css";

function App() {
  // Mock data passed as props for demonstration purposes
  const mockData = {
    userName: "John Doe",
    testResults: [
      {
        date: "2023-08-01",
        type: "Bloodwork",
        result: "Normal",
      },
      {
        date: "2023-07-20",
        type: "MRI",
        result: "No issues detected",
      },
    ],
    appointments: [
      {
        date: "2023-09-10",
        time: "10:00 AM",
        doctor: "Dr. Jane Smith",
        specialty: "Primary Care Physician",
      },
      {
        date: "2023-10-05",
        time: "02:00 PM",
        doctor: "Dr. Raymond Holt",
        specialty: "Cardiologist",
      },
    ],
    medications: [
      {
        name: "Atorvastatin",
        dosage: "10mg",
        frequency: "Once a day",
      },
      {
        name: "Lisinopril",
        dosage: "20mg",
        frequency: "Once a day",
      },
    ],
    doctors: [
      {
        name: "Dr. Jane Smith",
        specialty: "Primary Care Physician",
      },
      {
        name: "Dr. Raymond Holt",
        specialty: "Cardiologist",
      },
    ],
  };
  return (
    <Router>
      <div className="App">
        <Header userName={mockData.userName} />
        <div className="app-body">
          <Sidebar />
          <main className="app-content">
            <Routes>
              <Route path="/" element={<HomePage {...mockData} />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/insurance" element={<InsurancePage />} />
              <Route path="/immunizations" element={<ImmunizationsPage />} />
              <Route path="/medications" element={<MedicationsPage />} />
              <Route path="/consultations" element={<ConsultationsPage />} />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/radiology" element={<Radiology />} />{" "}
              <Route path="/Doctorhomepage" element={<Doctorhomepage />} />{" "}
              <Route path="/InputMedical" element={<InputMedical />} />{" "}
              {/* ... other routes */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
