export function validateEmployee(emp) {
    const errors = {
        name: "",
        email: "",
        phone: "",
        company: ""
    };

    if (emp.name.trim() === "") {
        errors.name = "Name is required";
    }

    if (emp.email.trim() === "") {
        errors.email = "Email is required";
    }

    if (emp.phone.trim() === "") {
        errors.phone = "Phone is required";
    }

    if (emp.company.name.trim() === "") {
        errors.company = "Company is required";
    }

    return errors;
}