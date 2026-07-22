import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateEmployee } from "../utils/employeeValidation";
import { createEmployee, fetchSingleEmployee, updateEmployee } from "../services/employeeService";
import initialEmployee from "../constants/initialEmployee";
import initialErrors from "../constants/initialErrors";
import EmployeeForm from "../components/EmployeeForm";

function EmployeeDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [emp, setEmp] = useState(initialEmployee);
    const [errors, setErrors] = useState(initialErrors)
    const [employees, setEmployees] = useState([]);
    const [error,setError] = useState("");

      function handleChange(e) {
      const { name, value } = e.target;

      if (name === "company") {
          setEmp(prev => ({
              ...prev,
              company: {
                  ...prev.company,
                  name: value,
              },
          }));
          return;
      }

      setEmp(prev => ({
          ...prev,
          [name]: value,
      }));
  }


  async function handleUpdateEmployee() {

      try {

          const updatedEmployee = await updateEmployee(emp);

          setEmployees(prev =>
              prev.map(employee =>
                  employee.id === updatedEmployee.id
                      ? updatedEmployee
                      : employee
              )
          );

          setEmp(initialEmployee);
          navigate("/employees")

      } catch(err) {

          setError(err.message);

      }
      finally {
        setErrors(initialErrors);
      }

  }

    useEffect(() => {
    async function loadEmployee() {
        try {
        // 1. Fetch the data from your service
        const data = await fetchSingleEmployee(id);
        
        // 2. Set the data into your emp state
        setEmp(data); 
        } catch (err) {
        // 3. Handle errors if the employee is not found
        setError(err.message || "Failed to load employee data.");
        }
    }

    // Only run the function if an id exists in the URL
    if (id) {
        loadEmployee();
    }
    }, [id]); // Added id as a dependency so it reruns if the URL changes

    return (

        <div>

            <h1>Details Employee </h1>
            <p>Name: {emp.name}</p>
            <p>Email: {emp.email}</p>
            <p>Phone: {emp.phone}</p>
            <p>Company: {emp.company.name}</p>

            <button onClick={() => { navigate(`/employees/${id}/edit`)}}>Edit</button>
        </div>
    );
}

export default EmployeeDetails;
