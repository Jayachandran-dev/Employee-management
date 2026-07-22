import EmployeeList from "../components/EmployeeList";
import { useState, useEffect, useContext } from "react";
import { deleteEmployee, getEmployees } from "../services/employeeService"
import SearchEmployee from "../components/SearchBar";
import EmployeeListLoading from "../components/Loader";
import { useNavigate } from "react-router-dom";
import EmployeeContext from "../context/EmployeeContext";

function Employees() {
      const { employees, setEmployees } = useContext(EmployeeContext);
      const [search, setSearch] = useState("");
      const [loading, setLoading] = useState(false);
      const navigate = useNavigate()
          async function handleDelete(id) {
        
        
                  await deleteEmployee(id);
        
                  setEmployees(prev =>
                      prev.filter(employee => employee.id !== id)
                  );
        
          }


    function handleEdit(id) {
        navigate(`/employees/${id}/edit`)

    }

    function handleDetails(id) {
        navigate(`/employees/${id}`)
    }
    function onCreate() {
        navigate("/employees/new")
    }

    const filteredEmployees = (employees || []).filter((employee) => {
      const keyword = search.trim().toLowerCase();

        return (
        employee.name.toLowerCase().includes(keyword) ||
        employee.email.toLowerCase().includes(keyword) ||
        employee.company.name.toLowerCase().includes(keyword) ||
        employee.phone.toLowerCase().includes(keyword)
        );
    });

      async function fetchEmployees() {
          try {
              setLoading(true);
    
              const data = await getEmployees();
    
              setEmployees(data);
          } finally {
              setLoading(false);
          }
      }
      useEffect(() => {
    
      fetchEmployees()
      }, []);
    
    if (loading) {
        return <EmployeeListLoading loadingText="Employee"/>
    }

    return (
        <div>
            <h1>Employees Page</h1> 
            <SearchEmployee search={search} setSearch={setSearch} onFetchEmployees={fetchEmployees} onCreate={onCreate}/> <br />
            <EmployeeList
                employees={filteredEmployees}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onView={handleDetails}
            />
        </div>
    );
}

export default Employees;