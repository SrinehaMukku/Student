// // import React, { useState, useEffect } from 'react';
// // import axios from "axios";
// // import '../styles/Home.css'; 

// // const Home = () => {
// //     const [data, setData] = useState([]);
// //     const loadData = async () => {
// //         const response = await axios.get("http://localhost:5000/api/get");
// //         setData(response.data);
// //     };
    
// //     useEffect(() => {
// //         loadData();
// //     }, []);

// //     return (
// //         <div style={{ marginTop: "150px" }}>
// //             <table className="styled-table">
// //                 <thead>
// //                     <tr>
// //                         <th style={{ textAlign: "center" }}>ID</th>
// //                         <th style={{ textAlign: "center" }}>NAME</th>
// //                         <th style={{ textAlign: "center" }}>REGD</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {data.map((item, index) => {
// //                         return (
// //                             <tr key={item.id}>
// //                                 <th scope="row">{index + 1}</th>
// //                                 <td>{item.name}</td>
// //                                 <td>{item.regno}</td>
// //                             </tr>
// //                         );
// //                     })}
// //                 </tbody>
// //             </table>
// //         </div>
// //     );
// // };

// // export default Home;




// import React, { useState, useEffect } from 'react';
// import axios from "axios";
// import '../styles/Home.css'; 
// import StudentModal from './Dashboard'; // Adjust the path if necessary

// const Home = () => {
//     const [data, setData] = useState([]);
//     const [selectedStudent, setSelectedStudent] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const loadData = async () => {
//         const response = await axios.get("http://localhost:5000/api/get");
//         setData(response.data);
//     };

//     const fetchStudentDetails = async (regno) => {
//         const response = await axios.get(`http://localhost:5000/api/info/${regno}`);
//         setSelectedStudent(response.data);
//         setShowModal(true);
//     };

//     useEffect(() => {
//         loadData();
//     }, []);

//     return (
//         <div style={{ marginTop: "150px" }}>
//             <table className="styled-table">
//                 <thead>
//                     <tr>
//                         {/* <th style={{ textAlign: "center" }}>ID</th>
//                         <th style={{ textAlign: "center" }}>NAME</th> */}
//                         <th style={{ textAlign: "center" }}>REGD</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item, index) => {
//                         return (
//                             <tr key={item.id} onClick={() => fetchStudentDetails(item.regno)}>
//                                 {/* <th scope="row">{index + 1}</th>
//                                 <td>{item.name}</td> */}
//                                 <td>{item.regno}</td>
//                             </tr>
//                         );
//                     })}
//                 </tbody>
//             </table>

//             {/* {showModal && selectedStudent && (
//                 <StudentModal 
//                     student={selectedStudent} 
//                     onClose={() => setShowModal(false)} 
//                 />
//             )} */}
//         </div>
//     );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import '../styles/Home.css';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); 

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };


    useEffect(() => {
        loadData();
    }, []);

    return (
        <div style={{ marginTop: "150px" }}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>REGD</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} >
                            <td>
                                <Link to={`/info/${item.regno}`}>{item.regno}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
