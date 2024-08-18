const API_URL = 'http://localhost:5000/api/employees';

export const fetchEmployees = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const addEmployee = async (employee) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const editEmployee = async (id, employee) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};

export const deleteEmployee = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
};
