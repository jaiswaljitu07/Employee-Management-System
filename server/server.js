const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5488',
    database: 'employee_management'
});

// Connect to MySQL
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Define routes
app.get('/api/employees', (req, res) => {
    db.query('SELECT firstName, lastName, email, salary, date FROM employees', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.post('/api/employees', (req, res) => {
    const { firstName, lastName, email, salary, date } = req.body;
    const query = 'INSERT INTO employees (firstName, lastName, email, salary, date) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, email, salary, date], (err, results) => {
        if (err) {
            console.error('Error inserting employee:', err);
            return res.status(500).json({ error: 'Error inserting employee' });
        }
        res.status(201).json({ id: results.insertId, firstName, lastName, email, salary, date });
    });
});

app.put('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, salary, date } = req.body;
    const query = 'UPDATE employees SET firstName = ?, lastName = ?, email = ?, salary = ?, date = ? WHERE id = ?';
    db.query(query, [firstName, lastName, email, salary, date, id], (err) => {
        if (err) throw err;
        res.json({ id, firstName, lastName, email, salary, date });
    });
});

app.delete('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM employees WHERE id = ?', [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Employee deleted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
