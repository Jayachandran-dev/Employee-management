import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmployee } from "../utils/employeeValidation";
import { createEmployee } from "../services/employeeService";
import initialEmployee from "../constants/initialEmployee";
import initialErrors from "../constants/initialErrors";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
    const navigate = useNavigate();
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


async function handleAddEmployee() {
    
    const validationErrors = validateEmployee(emp);

    setErrors(validationErrors);

    const isValid = Object.values(validationErrors).every(
        error => error === ""
    );

    if (!isValid) {
        return;
    }

    try {

        const savedEmployee = await createEmployee(emp);

        setEmployees(prev => [...prev, savedEmployee]);

        setEmp(initialEmployee);

        navigate("/employees")

    } catch(err) {

        setError(err.message);

    }
    finally {
        setErrors(initialErrors);
    }

}
    return (

        <div>

            <h1>Add Employee</h1>
                <EmployeeForm
                emp={emp}
                errors={errors}
                onHandleChange={handleChange}
                onAddEmployee={handleAddEmployee}
            />
        </div>
    );
}

export default AddEmployee;