const express = require('express');
const mysql = require('mysql2/promise'); // Import MySQL client
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Configuration
const dbConfig = {
  host: process.env.DB_SERVER, // Render-provided or your custom database host
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306, // Render database often uses custom ports
  connectTimeout: 10000,
};

// Validate environment variables
if (!dbConfig.host || !dbConfig.user || !dbConfig.password || !dbConfig.database) {
  console.error('Database environment variables are missing.');
  process.exit(1);
}

// Route to fetch details
app.get('/details/:name_of_work?', async (req, res) => {
  const { name_of_work } = req.params;
  console.log('Fetching details for:', name_of_work || 'All works');

  let connection;
  try {
    // Connect to MySQL
    connection = await mysql.createConnection(dbConfig);

    let query = 'SELECT * FROM Construction_Guidelines';
    const values = [];

    if (name_of_work) {
      query += ' WHERE name_of_work = ?';
      values.push(name_of_work);
    }

    // Execute the query
    const [rows] = await connection.execute(query, values);
    res.json(rows);
  } catch (err) {
    console.error('Database error:', {
      code: err.code,
      message: err.message,
      stack: err.stack,
    });
    res.status(500).json({
      error: 'Failed to fetch data from the database',
      details: err.message,
    });
  } finally {
    if (connection) {
      try {
        await connection.end(); // Close the connection
      } catch (closeErr) {
        console.error('Error closing database connection:', closeErr.message);
      }
    }
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  const environment = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
  console.log(`Server running on ${environment}`);
});
