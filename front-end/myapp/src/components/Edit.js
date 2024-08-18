import React, { useState, useEffect } from 'react';
import './Edit.css';

function Edit({ selectedEmployee, handleUpdate, setIsEditing }) {
    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    useEffect(() => {
        setFirstName(selectedEmployee.firstName);
        setLastName(selectedEmployee.lastName);
        setEmail(selectedEmployee.email);
        setSalary(selectedEmployee.salary);
        setDate(selectedEmployee.date);
    }, [selectedEmployee]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedEmployee = { id: selectedEmployee.id, firstName, lastName, email, salary, date };
        await handleUpdate(updatedEmployee);
    };

    return (
        <div className="small-container">
            <form onSubmit={handleSubmit}>
                <h1>Edit Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div className="button-container">
                    <button type="submit">Update Employee</button>
                    <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Edit;
