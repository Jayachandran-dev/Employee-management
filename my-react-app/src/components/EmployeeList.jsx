import EmployeeCard from "./EmployeeCard";
import EmployeeContext from "../context/EmployeeContext";
import { useContext } from "react";

function EmployeeList({
  employees,
  onDelete,
  onEdit,
  onView
}) {
  const { employees: contextEmployees = [] } = useContext(EmployeeContext);
  const visibleEmployees = employees ?? contextEmployees;

  return (
    <>
      {visibleEmployees.map((employee) => (
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