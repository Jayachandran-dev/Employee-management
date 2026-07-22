import { Navigate } from "react-router-dom";

function Dashboard() {

    const isLoggedIn = true;

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return <h1>Dashboard </h1>;
}

export default Dashboard;