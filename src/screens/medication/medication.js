// import React from 'react';

// function medication() {
//   return (
//     <div>
//       <h1>Medications</h1>
//       <p>Access your medication history and prescriptions.</p>
//       {/* Implementation details for managing and viewing medications go here */}
//     </div>
//   );
// }

// export default medication;


// src/screens/MedicationsPage/MedicationsPage.js

import React from 'react';
import styles from './medication.module.css';

function medication() {
    return (
        <div className={styles.medicationsPage}>
            <h1 className={styles.heading}>Medications</h1>
            <p>Track and manage your medications here.</p>
            <div className={styles.medicationList}>
                {/* Example static list, replace with dynamic content as needed */}
                <div className={styles.medicationItem}>Medication A - Dosage: Once daily</div>
                <div className={styles.medicationItem}>Medication B - Dosage: Twice daily</div>
                <div className={styles.medicationItem}>Medication C - Dosage: Three times a week</div>
            </div>
        </div>
    );
}

export default medication;
