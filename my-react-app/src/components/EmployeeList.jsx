import EmployeeCard from "./EmployeeCard";

function EmployeeList({
  employees,
  onDelete,
  onEdit,
  onView
}) {
  return (
    <>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
          onEdit={onEdit}
          onView={onView}
        />
      ))}
    </>
  );
}

export default EmployeeList;