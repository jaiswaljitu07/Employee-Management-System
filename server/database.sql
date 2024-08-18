-- Create table schema for employees
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL
);

-- Example data
INSERT INTO employees (firstName, lastName, email, salary, date) VALUES 
('John', 'Doe', 'john.doe@example.com', 50000.00, '2024-01-15'),
('Jane', 'Smith', 'jane.smith@example.com', 60000.00, '2024-02-20');
