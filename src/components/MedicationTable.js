import React from "react";
import "./MedicationTable.css";



const MedItem = ({medItem}) => {
    return(
        <tr  style={{backgroundColor: "rgb(250,250,250)"}}>
            <td>{medItem.medicine}</td>
            <td>{medItem.strength}</td>
            <td>{medItem.quantity}</td>
            <td>{medItem.refills}</td>
            <td>{medItem.date1}</td>
            <td>{medItem.date2}</td>
            <td>{medItem.prescribed}</td>
            <td>{medItem.type}</td>
            <td>{medItem.class}</td>
        </tr>
    );
}


const MedicationTable = ({medList}) => {
  return (
    <div id="medtable-area">
        <table id="med-table">
            <tr id="table-headers" style={{backgroundColor: "rgb(114,161,205)"}}>
                <th style={{minWidth: "8vw"}}>Medicine</th>
                <th style={{minWidth: "5vw"}}>Strength</th>
                <th style={{minWidth: "5vw"}}>Quantity</th>
                <th style={{minWidth: "3vw"}}>Refills</th>
                <th style={{minWidth: "7vw"}}>
                    Start Date
                    <br></br>
                    (mm/dd/yyyy)
                </th>
                <th style={{minWidth: "7vw"}}>
                    End Date
                    <br></br>
                    (mm/dd/yyyy)
                </th>
                <th style={{minWidth: "12vw"}}>
                    Prescribed by
                    <br></br>
                    (clinic, doctor, etc.)
                </th>
                <th style={{minWidth: "5vw"}}>Type</th>
                <th style={{minWidth: "8vw"}}>Class</th>
            </tr>
            {medList.map((medItem) => (
            <MedItem key={medItem.medicine} medItem={medItem} />
            ))}
        </table>
    </div>
  );
};



export default MedicationTable;