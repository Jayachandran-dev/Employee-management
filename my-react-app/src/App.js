import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import EditEmployee from "./pages/EditEmployee";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar.jsx"
import EmployeesLayout from "./pages/EmployeesLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { useLocation } from "react-router-dom";

 function App() {
    const location = useLocation();
    const hideNavbar = location.pathname === '/';
    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {!hideNavbar && (<div style={{ width: "25%", overflowY: "auto" }}>
                <Navbar />
            </div>)}
            <div style={{ width: !hideNavbar ? "75%" : "100%", overflowY: "auto" }}>
                <Routes>
                   <Route path="/employees" element={<EmployeesLayout />}>
                        <Route index element={<Employees />} />
                        <Route path="new" element={<AddEmployee />} />
                        <Route path=":id" element={<EmployeeDetails />} />
                        <Route path=":id/edit" element={<EditEmployee />} />
                    </Route>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;