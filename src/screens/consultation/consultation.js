// import React from 'react';

// function consultation() {
//   return (
//     <div>
//       <h1>Consultations</h1>
//       <p>View your past and upcoming consultations here.</p>
//       {/* Implementation details such as fetching and displaying consultations go here */}
//     </div>
//   );
// }

// export default consultation;


// src/screens/ConsultationsPage/ConsultationsPage.js

import React from 'react';
import styles from './consultation.module.css';

function consultation() {
    return (
        <div className={styles.consultationPage}>
            <h1 className={styles.heading}>Consultations</h1>
            <p>Here you can view all your past and upcoming consultations.</p>
            <div className={styles.consultationList}>
                {/* Example static list, replace with dynamic content as needed */}
                <div className={styles.consultationItem}>Consultation 1</div>
                <div className={styles.consultationItem}>Consultation 2</div>
                <div className={styles.consultationItem}>Consultation 3</div>
            </div>
        </div>
    );
}

export default consultation;


