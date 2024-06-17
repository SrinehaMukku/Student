// import React, { useState, useEffect } from 'react';
// import axios from "axios";

// const Home = () => {
//     const [data, setData] = useState([]);
//     const loadData = async () => {
//         const response = await axios.get("http://localhost:5000/api/get");
//         setData(response.data);
//     };
    
//     useEffect(() => {
//         loadData();
//     }, []);

//     return (
//         <div style={{marginTop: "150px"}}>
//             <table className="styled-table">
//                 <thead>
//                     <tr>
//                         <th style={{textAlign: "center"}}>ID</th>
//                         <th style={{textAlign: "center"}}>NAME</th>
//                         <th style={{textAlign: "center"}}>REGD</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((item,index) => {
//                         return (
//                             <tr key={item.id}>
//                                 <th scope="row">{index+1}</th>
//                                 <td>{item.name}</td>
//                                 <td>{item.regno}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Home;
import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../styles/Home.css'; 

const Home = () => {
    const [data, setData] = useState([]);
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
                        <th style={{ textAlign: "center" }}>ID</th>
                        <th style={{ textAlign: "center" }}>NAME</th>
                        <th style={{ textAlign: "center" }}>REGD</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.regno}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
