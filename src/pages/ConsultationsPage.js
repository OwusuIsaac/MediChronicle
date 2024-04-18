import React from "react";
import "./ConsultationsPage.css";
import Consultation from "../components/Consultation";

const consultationList = [
  {
    id: 1,
    category: "Bloodwork",
    provider: "Cleveland Clinic",
    date: "01/01/2024",
    desc: "Discussed results of recent blood tests - reduced sodium intake advised. (Simple version)",
  },

  {
    id: 2,
    category: "Radiology",
    provider: "Cleveland Clinic",
    date: "02/02/2024",
    desc: `Findings:\n
    LUNGS: New small anterior pneumotoraces bilaterally. Patient is status post left upper lobe, left lower lobe, right lower lobe, and right upper lobe wedge resections. There is a small posteropative cavity within the right upper lobe that measures 2.4 x 2.4 cm and is surrounded by adjacent consolidation.\n
    THORACIC NODES: Subcentimeter mediastinal lymph nodes. Surgical clips are present within the left axilla.\n
    ADRENAL GLANDS: unremarkable.\n
    Clinical correlation recommended. (Longer version)`,
  },
];

const ConsultationsPage = () => {
  return (
    <div className="consultations-page">
      <h1>My Consultations</h1>
      {consultationList.map((consultation) => (
        <Consultation key={consultation.id} consultation={consultation} />
      ))}
    </div>
  );
};

export default ConsultationsPage;
