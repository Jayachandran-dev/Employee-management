function EmployeeCard({ employee, onDelete, onEdit, onView }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>Name: {employee?.name}</h3>

      <p>email: {employee?.email}</p>

      <p>Phone: {employee?.phone}</p>

      <p>Company: {employee?.company?.name}</p>

      <button onClick={() => onEdit(employee.id)}>
        Edit
      </button>

      <button onClick={() => onView(employee.id)}>
        View details
      </button>

      <button
        onClick={() => onDelete(employee.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default EmployeeCard;