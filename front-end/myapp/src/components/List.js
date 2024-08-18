import React from 'react';
import './List.css';

function List({ employees, handleEdit, handleDelete }) {
    return (
        <div className="list-container">
            <h1>Employee List</h1>
            {employees.length === 0 ? (
                <p>No employees found</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.email}</td>
                                <td>{emp.salary}</td>
                                <td>{emp.date}</td>
                                <td className="actions">
                                    <button onClick={() => handleEdit(emp.id)}>Edit</button>
                                    <button onClick={() => handleDelete(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default List;
