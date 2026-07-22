import { useState } from "react";
import EmployeeContext from "./EmployeeContext";

function EmployeeProvider({ children }) {
    const [employees, setEmployees] = useState([]);

    return (
        <EmployeeContext.Provider
            value={{
                employees,
                setEmployees,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
}

export default EmployeeProvider;