import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import { fetchEmployees, addEmployee, editEmployee, deleteEmployee } from '../api';

function Dashboard() {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                const data = await fetchEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };
        loadEmployees();
    }, []);

    const handleEdit = (id) => {
        const employee = employees.find(emp => emp.id === id);
        setSelectedEmployee(employee);
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        try {
            await deleteEmployee(id);
            setEmployees(employees.filter(emp => emp.id !== id));
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Employee data has been deleted.',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error deleting employee:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error deleting employee.'
            });
        }
    };

    const handleAdd = async (employee) => {
        try {
            const newEmployee = await addEmployee(employee);
            setEmployees([...employees, newEmployee]);
            setIsAdding(false);
            Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: 'Employee data has been added.',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error adding employee:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error adding employee.'
            });
        }
    };

    const handleUpdate = async (employee) => {
        try {
            const updatedEmployee = await editEmployee(employee.id, employee);
            setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
            setIsEditing(false);
            Swal.fire({
                icon: 'success',
                title: 'Updated!',
                text: 'Employee data has been updated.',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error updating employee:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Error updating employee.'
            });
        }
    };

    return (
        <div className='container'>
            {!isAdding && !isEditing && (
                <>
                    <Header setIsAdding={setIsAdding} />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {isAdding && (
                <Add
                    handleAdd={handleAdd}
                    setIsAdding={setIsAdding}
                />
            )}
            {isEditing && (
                <Edit
                    selectedEmployee={selectedEmployee}
                    handleUpdate={handleUpdate}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    );
}

export default Dashboard;
