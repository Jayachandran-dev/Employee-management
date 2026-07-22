import EmployeeInput from "./EmployeeInput";

function EmployeeForm({
  emp,
  errors,
  onHandleChange = () => {},
  onAddEmployee = () => {},
  onUpdateEmployee = () => {},
}) {

    return (
        <div>

             <EmployeeInput 
        name="name" placeholder="Name" value={emp.name} onHandleChange={onHandleChange}
        error={errors.name}
      />

      
      <EmployeeInput 
        name="email" placeholder="Email" value={emp.email} onHandleChange={onHandleChange}
        error={errors.email}
      />

      <EmployeeInput 
        name="phone" placeholder="Phone" value={emp.phone} onHandleChange={onHandleChange}
        error={errors.phone}
      />
      <EmployeeInput 
        name="company" placeholder="Company" value={emp.company.name} onHandleChange={onHandleChange}
        error={errors.company}
      />
      <br />

      {emp.id ? (
        <button onClick={onUpdateEmployee}>
          Update Employee
        </button>
      ) : (
        <button onClick={onAddEmployee}>
          Add Employee
        </button>
      )}
        </div>
    )
}

export default EmployeeForm; 