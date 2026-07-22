import { useState, useEffect } from "react";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "./services/employeeService";
import SearchEmployee from "./components/SearchBar";
import EmployeeListLoading from "./components/Loader";
import EmployeeForm from "./components/EmployeeForm"
import EmployeeList from "./components/EmployeeList";
import initialEmployee from "./constants/initialEmployee"
import { validateEmployee } from "./utils/employeeValidation";
import initialErrors from "./constants/initialErrors"

function App() {
  const [employees, setEmployees] = useState([]);
  
  const [search, setSearch] = useState("");
  const [emp, setEmp] = useState(initialEmployee);
  const [errors, setErrors] = useState(initialErrors)
  const [loading, setLoading] = useState(false);
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

    } catch(err) {

        setError(err.message);

    }
    finally {
        setErrors(initialErrors);
    }

}

  async function handleDelete(id) {

      try {

          await deleteEmployee(id);

          setEmployees(prev =>
              prev.filter(employee => employee.id !== id)
          );

      } catch(err) {

          setError(err.message);

      }

  }

  function handleEdit(id) {
    const employee = employees.find((emp) => emp.id === id);

    setEmp(employee);
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

      } catch(err) {

          setError(err.message);

      }
      finally {
        setErrors(initialErrors);
      }

  }

  

  const filteredEmployees = employees.filter((employee) => {
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
      } catch (err) {
          setError(err.message);
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
    <div style={{ padding: "20px" }}>
      <SearchEmployee search={search} setSearch={setSearch} onFetchEmployees={fetchEmployees} />
      <h2>Employee Management</h2>

    <EmployeeForm
    emp={emp}
    errors={errors}
    onHandleChange={handleChange}
    onAddEmployee={handleAddEmployee}
    onUpdateEmployee={handleUpdateEmployee}
/>
     

      {error && (
          <p style={{color:"red"}}>
              {error}
          </p>
      )}
      <hr />


      <EmployeeList
          employees={filteredEmployees}
          onDelete={handleDelete}
          onEdit={handleEdit}
      />

    </div>
  );
}

export default App;