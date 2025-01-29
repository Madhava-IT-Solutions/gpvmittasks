const express = require('express');
const mysql = require('mysql2/promise'); // Import MySQL client
const cors = require('cors');
require('dotenv').config();

const app = express();

const allowedOrigins = ['https://construction-guidelines.onrender.com','http://localhost:5173' ]; // Replace with the actual URL of your frontend

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      // Allow requests from the allowed domains
      callback(null, true);
    } else {
      // Reject requests from other domains
      callback(new Error('Not allowed by CORS'), false);
    }
  },
};

app.use(cors(corsOptions)); // Use the CORS options

app.use(express.json());

// MySQL Configuration
const dbConfig = {
  host: process.env.DB_SERVER, // Replace 'server' with 'host'
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306, 
  connectTimeout: 60000
};

(async () => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to the database successfully.');
    await connection.query('SELECT 1'); // Test query
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1); // Exit if the connection fails
  } finally {
    if (connection) await connection.end();
  }
})();


// Validate environment variables
if (!dbConfig.host || !dbConfig.user || !dbConfig.password || !dbConfig.database) {
  console.error('Database environment variables are missing.');
  process.exit(1);
}

app.get('/details/:name_of_work?', async (req, res) => {
  const { name_of_work } = req.params;
  console.log(name_of_work)

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
    console.error('Database error:', err);
    res.status(500).send('Internal Server Error');
  } finally {
    if (connection) {
      await connection.end(); // Close the connection
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  const environment = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;
  console.log(`Server running on ${environment}`);
});

app.get('/health', (req, res) => res.send('Backend is running!'));