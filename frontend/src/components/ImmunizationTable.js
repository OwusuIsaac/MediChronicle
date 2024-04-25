import React from "react";
import "./ImmunizationTable.css";

const immunization_data = [
  {
    vaccine: "DPT/DtaP/DT/Td",
    type: "Regular",
    date1: "01/01/2024",
    administered: "Cleveland Clinic Abu Dhabi",
    date2: "02/02/2024",
  },
  {
    vaccine: "",
    type: "Booster",
    date1: "01/01/2024",
    administered: "Cleveland Clinic Abu Dhabi",
    date2: "02/02/2024",
  },
  {
    vaccine: "Hepatitis A",
    type: "Regular",
    date1: "01/01/2024",
    administered: "Cleveland Clinic Abu Dhabi",
    date2: "02/02/2024",
  },
  {
    vaccine: "Hepatitis B",
    type: "Regular",
    date1: "01/01/2024",
    administered: "Cleveland Clinic Abu Dhabi",
    date2: "02/02/2024",
  },
  {
    vaccine: "Polio",
    type: "Regular",
    date1: "01/01/2024",
    administered: "Cleveland Clinic Abu Dhabi",
    date2: "02/02/2024",
  },
  {
    vaccine: "HPV",
    type: "1st dose",
    date1: "01/01/2024",
    administered: "Cleveland Clinic Abu Dhabi",
    date2: "02/02/2024",
  },
  {
    vaccine: "",
    type: "2nd dose",
    date1: "01/01/2024",
    administered: "Cleveland Clinic Abu Dhabi",
    date2: "02/02/2024",
  },
];

const ImmunizationItem = ({ vaxxItem }) => {
  return (
    <tr>
      <td>{vaxxItem.vaccine}</td>
      <td>{vaxxItem.type}</td>
      <td>{vaxxItem.date1}</td>
      <td>{vaxxItem.administered}</td>
      <td>{vaxxItem.date2}</td>
    </tr>
  );
};

const ImmunizationTable = () => {
  return (
    <div id="immunotable-area">
      {/* <div id="table-title">
            Immunizations for: {user.name}
        </div> */}
      <table id="immunization-table" contentEditable="false">
        <tr id="table-headers">
          <th style={{ minWidth: "8vw" }}>Vaccine</th>
          <th style={{ minWidth: "4vw" }}>Type</th>
          <th style={{ minWidth: "6vw" }}>
            Date Given
            <br></br>
            (mm/dd/yyyy)
          </th>
          <th style={{ minWidth: "5vw" }}>
            Administered by
            <br></br>
            (clinic, doctor, etc.)
          </th>
          <th style={{ minWidth: "5vw" }}>
            Next Dose
            <br></br>
            (mm/dd/yyyy)
          </th>
        </tr>
        <ImmunizationItem vaxxItem={immunization_data[0]}></ImmunizationItem>
        <ImmunizationItem vaxxItem={immunization_data[1]}></ImmunizationItem>
        <ImmunizationItem vaxxItem={immunization_data[2]}></ImmunizationItem>
        <ImmunizationItem vaxxItem={immunization_data[3]}></ImmunizationItem>
        <ImmunizationItem vaxxItem={immunization_data[4]}></ImmunizationItem>
        <ImmunizationItem vaxxItem={immunization_data[5]}></ImmunizationItem>
        <ImmunizationItem vaxxItem={immunization_data[6]}></ImmunizationItem>
      </table>
    </div>
  );
};

export default ImmunizationTable;
