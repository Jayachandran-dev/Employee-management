import { NavLink } from "react-router-dom";

function Navbar() {
    const navItems = [
        { to: "/", label: "Home" },
        { to: "/employees", label: "Employees" },
        { to: "/employees/new", label: "Add Employee" },
    ];

    return (
        <aside
            style={{
                width: "100%",
                height: "100%",
                background: "#1f2937",
                color: "#fff",
                padding: "24px 20px",
                boxSizing: "border-box",
            }}
        >
            <h2 style={{ margin: "0 0 8px", fontSize: "24px" }}>Employee Hub</h2>
            <p style={{ margin: "0 0 20px", color: "#cbd5e1", fontSize: "14px" }}>
                Manage your staff records
            </p>

            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {navItems.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end
                        style={({ isActive }) => ({
                            textDecoration: "none",
                            padding: "12px 14px",
                            borderRadius: "10px",
                            color: isActive ? "#fff" : "#cbd5e1",
                            background: isActive ? "#2563eb" : "transparent",
                            fontWeight: 600,
                            transition: "all 0.2s ease",
                        })}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default Navbar;
