import React from 'react';
//import './StudentModal.css'; 

const StudentModal = ({ student, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{student.name}'s Profile</h2>
                <img src={student.photoUrl} alt={`${student.name}'s photo`} />
                <p><strong>Registration Number:</strong> {student.regno}</p>
                <p><strong>Other Details:</strong></p>
                <p>{student.details}</p>
            </div>
        </div>
    );
};

export default StudentModal;
