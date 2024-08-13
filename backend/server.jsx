// const express = require("express");
// const cors = require("cors");
// const mysql = require("mysql");
// const db = require("./src/utile/db");
// const app = express();
// const port = 6700;
// app.use(express.json());
// app.use(cors())



// db.connect(err => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the MySQL database.');
// });

// const category = require("./src/route/category.route");
// category(app);



// const authRoutes = require('./src/route/authRoute');
// app.use('/api/auth', authRoutes);



// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


// // npm run dev



const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const db = require('./src/utile/db'); // Your database utility file
const app = express();
const port = 6700;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to handle CORS

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Import and use the category routes
const category = require("./src/route/category.route");
category(app);

// Import and use the authentication routes
const authRoutes = require('./src/route/authRoute');
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
