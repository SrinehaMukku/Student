// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentDetails = ({ match }) => {
//     const regno = match.params.regno; // Get the registration number from the route parameter
//     const [studentData, setStudentData] = useState(null);

//     useEffect(() => {
//         // Fetch student data based on the registration number
//         const fetchStudentData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/info/${regno}`);
//                 setStudentData(response.data);
//             } catch (error) {
//                 console.error('Error fetching student data:', error);
//             }
//         };

//         fetchStudentData();
//     }, [regno]);

//     if (!studentData) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div>
//             <h2>{studentData.name}'s Details</h2>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Field</th>
//                         <th>Value</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Registration Number</td>
//                         <td>{studentData.regno}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default StudentDetails;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const StudentDetails = () => {
    const {regno} = useParams(); // Get the registration number from the route parameter
    const [info, setInfo] = useState(null);

    useEffect(() => {
        // Fetch student data based on the registration number (or ID)
        const fetchStudentData = async () => {
            try {
                // Replace the URL with your MySQL API endpoint
                const response = await axios.get(`http://localhost:5000/api/info/${regno}`);
                setInfo(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, [regno]);

    if (!info) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{info.name}'s Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Registration Number</td>
                        <td>{info.regno}</td>
                    </tr>
                    <tr>
                        <td>Registration Number</td>
                        <td>{info.name}</td>
                    </tr>
                    <tr>
                        <td>Registration Number</td>
                        <td>{info.id}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentDetails;
