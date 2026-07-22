import { Outlet } from "react-router-dom";

function EmployeesLayout() {

    return (
        <div>
            <h1>Employee management</h1>
            <hr />

            <Outlet />
        </div>
    )
}

export default EmployeesLayout;