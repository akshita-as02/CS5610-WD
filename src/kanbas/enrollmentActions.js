import React, { useState } from 'react';

function EnrollmentButton() {
  // State to track enrollment status
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Function to toggle enrollment status
  const handleEnrollment = () => {
    setIsEnrolled(prevStatus => !prevStatus); // Toggle the status
  };

  return (
    <button
      onClick={handleEnrollment}
      style={{
        backgroundColor: isEnrolled ? 'red' : 'green',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {isEnrolled ? 'Unenroll' : 'Enroll'}
    </button>
  );
}

export default EnrollmentButton;
