function EmployeeInput({value, onHandleChange, error, placeholder, name}) {
    return (
        <div>
            <input
                name={name}
                value={value}
                onChange={onHandleChange}
                placeholder={placeholder}
            />
            {error && (
                <p style={{ color: "red" }}>
                    {error}
                </p>
                )}
            <br />
            <br />
        </div>
    )
}

export default EmployeeInput;