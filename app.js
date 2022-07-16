const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// Connection MySQL.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tecnologia123*',
    database: 'node_mysql'
});

// Routes.
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

// Get all customers.
app.get('/customers', (req, res) => {
    const sql = 'SELECT * FROM `customers`';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.send('Not result.');
        }
    });  

    //res.send('List Customers');
})

// Get customer by Id.
app.get('/customers/:id', (req, res) => {
    const { id } = req.params;

    const sql = `SELECT * FROM customers WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        }
        else {
            res.send('Not result.');
        }
    });    
    //res.send('Get Customers by Id');
})

// Create a customer.
app.post('/add', (req, res) => {
    const sql = 'INSERT INTO customers SET ?';

    const customerObj = {
        name: req.body.name,
        city: req.body.city
    };

    connection.query(sql, customerObj, error => {
        if (error) throw error;
        res.send('Customer Created!');
    });    
    //res.send('New Customer');
});

// Update customer by Id.
app.put('/update/:id', (req, res) => {
    const { id } = req.params;

    const { name, city } = req.body;

    const sql = `UPDATE customers SET name = '${name}', city = '${city}' WHERE id = ${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        console.log('Customer Updated!');
    });
    //res.send('Update Customer');
});

// Delete customer by Id.
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM customers WHERE id = ${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Customer Deleted!')
    });
    //res.send('Delete Customer');
})

// Check connect.
connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!');
});

// Listen Server.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});