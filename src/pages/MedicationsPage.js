import React from "react";
import "./MedicationsPage.css";
import MedicationTable from "../components/MedicationTable";


const act_med = [
  {id: 1, medicine: "Adderall", strength: "200mg", quantity: "30ct", refills: "1", date1: "01/01/2024", date2: "02/02/2024", prescribed: "Cleveland Clinic", type: "Tablet", class: "Antibiotic"},
  {id: 1, medicine: "Amoxicillin", strength: "50mg", quantity: "30ct", refills: "1", date1: "01/01/2024", date2: "02/02/2024", prescribed: "Cleveland Clinic", type: "Liquid", class: "Antidepressant"},
  {id: 1, medicine: "Ibuprofen", strength: "200mg", quantity: "30ct", refills: "1", date1: "01/01/2024", date2: "02/02/2024", prescribed: "Cleveland Clinic", type: "Capsule", class: "Laxative"},
]

const past_med = [
  {id: 1, medicine: "Melatonin", strength: "200mg", quantity: "30ct", refills: "1", date1: "01/01/2024", date2: "02/02/2024", prescribed: "Cleveland Clinic", type: "Topical", class: "Muscle Relaxant"},
  {id: 1, medicine: "Lisinopril", strength: "20mg", quantity: "30ct", refills: "1", date1: "01/01/2024", date2: "02/02/2024", prescribed: "Cleveland Clinic", type: "Injection", class: "Sedative"},
  {id: 1, medicine: "Albuterol", strength: "100mg", quantity: "30ct", refills: "1", date1: "01/01/2024", date2: "02/02/2024", prescribed: "Cleveland Clinic", type: "Inhaler", class: "Steroid"},
  {id: 1, medicine: "Atorvastatin", strength: "10mg", quantity: "30ct", refills: "1", date1: "01/01/2024", date2: "02/02/2024", prescribed: "Cleveland Clinic", type: "Drops", class: "Antiviral"},
]


const MedicationsPage = () => {  
    return (
      <div className="medications-page">
        <h1>My Medications</h1>
        <div id="active-meds">
          <h2>Active Medications</h2>
          <MedicationTable medList={act_med} />
        </div>
        <hr className="solid"></hr>
        <div id="past-meds">
          <h2>Past Medications</h2>
          <MedicationTable medList={past_med} />
        </div>
      </div>
    );
  };


export default MedicationsPage;