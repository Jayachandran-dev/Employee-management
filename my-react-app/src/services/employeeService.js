const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getEmployees() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    return response.json();
}

export async function createEmployee(employee) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    });

    if (!response.ok) {
        throw new Error("Failed to create employee");
    }

    return response.json();
}

export async function updateEmployee(employee) {
    const response = await fetch(`${API_URL}/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
    });

    if (!response.ok) {
        throw new Error("Failed to update employee");
    }

    return response.json();
}

export async function fetchSingleEmployee(employee) {
    const response = await fetch(`${API_URL}/${employee}`, {
        method: "GET",
    });

    return response.json();
}

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export async function getEmployeeById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch employee");
    }

    return await response.json();
}

export async function deleteEmployee(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete employee");
    }
}