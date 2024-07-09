// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './PrivateRoute';
// import Home from './pages/Home';
// import StudentDetails from './pages/StudentDetails';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route 
//           path="/dashboard" 
//           element={
//             <PrivateRoute>
//               <Dashboard />
//             </PrivateRoute>
//           } 
//         />
//         <Route 
//           path="/home" 
//           element={
//             <PrivateRoute>
//               <Home />
//             </PrivateRoute>
//           } 
//         />
//         <Route path="/:regno" element={<StudentDetails />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import StudentDetails from './pages/StudentDetails';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                <Route path="/info/:regno" element={<StudentDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
