const express = require('express');
const mysql = require('mysql2/promise');
const dotenv = require("dotenv").config();
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const router = express.Router();

// Middleware
router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Set up file upload directory
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // Remote database host (e.g., 'remote.mysql.server.com' or IP address)
  user: process.env.DB_USER,       // Database username (the user with remote access privileges)
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME,   // Database name
  port: process.env.DB_PORT || 3306, // Database port (default: 3306, change if different)
  waitForConnections: true,
  connectionLimit: 10,            // Maximum number of connections in the pool
  queueLimit: 0,                  // Unlimited queue
});

// Connection check
pool.getConnection()
  .then((connection) => {
    console.log("Database connected successfully in home.js");
    connection.release();
  })
  .catch((err) => {
    console.error("Error connecting to database in home.js:", err);
  });

// Ensure the table exists
(async () => {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS tenders (
        id VARCHAR(255) PRIMARY KEY,
        name_of_work TEXT,
        area TEXT,
        plinth_area TEXT,
        state TEXT,
        district TEXT,
        place TEXT,
        nature_of_work TEXT,
        tender_published_on DATE,
        tender_response_by DATE,
        boq_file TEXT
      )
    `);
    connection.release();
  } catch (err) {
    console.error('Error creating table:', err);
  }
})();


// API route to handle form submission
router.post('/api/submit',async (req, res) => {
  const {
    name_of_work,
    client_id,
    area,
    plinth_area,
    state,
    district,
    nature_of_work,
    tender_published_on,
    tender_response_by,
  } = req.body;

  if (!name_of_work || !area || !state) {
    return res.status(400).send('Required fields are missing');
  }

  const boq_file = req.file ? req.file.filename : null;

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query('SELECT COUNT(*) AS count FROM tenders');
    const count = result[0].count;
    const tenderId = `K${String(count + 1).padStart(5, '0')}`;

    const query = `
      INSERT INTO tenders (id, client_id, name_of_work, area, plinth_area, state, district, nature_of_work, tender_published_on, tender_response_by, boq_file)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      tenderId,
      client_id,
      name_of_work,
      area,
      plinth_area,
      state,
      district,
      nature_of_work,
      tender_published_on,
      tender_response_by,
      boq_file,
    ];

    await connection.query(query, values);
    connection.release();
    res.send({ message: 'Tender submitted successfully', tenderId });
  } catch (err) {
    console.error('Failed to insert data into database:', err);
    res.status(500).send('Failed to insert data into database');
  }
});

// API route to search tenders
router.get('/api/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).send('Query parameter is required');
  }

  const sql = `
    SELECT * FROM tenders WHERE 
      id LIKE ? OR
      name_of_work LIKE ? OR
      state LIKE ? OR
      district LIKE ? OR
      place LIKE ? OR
      nature_of_work LIKE ?
  `;

  const values = Array(6).fill(`%${query}%`);

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql, values);
    connection.release();
    res.json(rows);
  } catch (err) {
    console.error('Error querying database:', err);
    res.status(500).send('Error querying database');
  }
});



router.get('/api/tenders', async (req, res) => {
  try {
    const connection = await pool.getConnection();

    // SQL query to get tenders data along with client details
    const query = `
      SELECT 
        t.id AS tender_id,
        t.tender_type,
        t.user_id,
        t.name_of_work,
        t.area,
        t.plinth_area,
        t.description,
        t.location,
        t.budget,
        t.deadline,
        t.nature_of_work,
        t.tender_published_on,
        t.tender_response_by,
        t.boq_file,
        t.status,
        t.state,
        t.district,
        c.username AS client_name,
        c.state AS client_address
      FROM 
        tenders t
      JOIN 
        clients c ON t.user_id = c.user_id;
    `;

    const [rows] = await connection.query(query);
    connection.release();
    res.json(rows);

  } catch (err) {
    console.error('Error retrieving tenders with client details:', err);
    res.status(500).send('Error retrieving tenders with client details');
  }
});



router.get('/api/applications/:user_id', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const { user_id } = req.params;

    // Updated SQL query to select applications based on user_id
    const query = `
      SELECT 
        a.id AS application_id,
        a.tender_id,
        a.client_id AS user_id,  -- Renamed to user_id
        a.name AS applicant_name,  -- Added name from applications table
        a.submitted_on,
        a.bid_amount,
        a.status,
        t.name_of_work AS tender_name,
        t.budget AS tender_budget,
        t.tender_response_by AS deadline
      FROM 
        applications a
      JOIN 
        tenders t ON a.tender_id = t.id
      WHERE  
        t.user_id = ? ;  -- Filter applications by user_id
    `;

    const [rows] = await connection.query(query, [user_id]);
    connection.release();
    res.json(rows);

  } catch (err) {
    console.error('Error retrieving applications for user:', err);
    res.status(500).send('Error retrieving applications for user');
  }
});


router.get('/api/mytenders/:user_id', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const { user_id } = req.params;

    // SQL query to select tenders based on user_id (assuming client_id is the user_id in tenders table)
    const query = `
      SELECT 
        t.id AS tender_id,
        t.name_of_work,
        t.area,
        t.plinth_area,
        t.state,
        t.district,
        t.nature_of_work,
        t.tender_published_on,
        t.tender_response_by,
        t.user_id,
        t.status AS tender_status,
        COUNT(a.id) AS total_applications  -- Optional: Count of applications for each tender
      FROM 
        tenders t
      LEFT JOIN 
        applications a ON t.id = a.tender_id  -- Join with applications table
      WHERE 
        t.user_id = ?  -- Filter tenders by client_id (user_id)
      GROUP BY 
        t.id;  -- Group by tender to get accurate application counts
    `;

    const [rows] = await connection.query(query, [user_id]);
    connection.release();

    res.json(rows);

  } catch (err) {
    console.error('Error retrieving tenders for user:', err);
    res.status(500).send('Error retrieving tenders for user');
  }
});


router.get('/api/contractor-applications/:user_id', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const { user_id } = req.params;

    // SQL query to get applications along with tender details
    const query = `
      SELECT 
        a.id AS application_id,
        a.tender_id,
        a.submitted_on,
        a.bid_amount,
        a.status,
        t.name_of_work AS tender_name,
        t.budget AS tender_budget,
        t.deadline AS tender_deadline
      FROM 
        applications a
      JOIN 
        tenders t ON a.tender_id = t.id
      WHERE 
        a.user_id = ?;  -- Updated contractor_id to user_id
    `;

    const [rows] = await connection.query(query, [user_id]);
    connection.release();
    res.json(rows);
    console.log(rows)

  } catch (err) {
    console.error('Error retrieving applications with tender details:', err);
    res.status(500).send('Error retrieving applications with tender details');
  }
});

router.get('/api/contractors', async (req, res) => {
  try {
    const connection = await pool.getConnection();

    // SQL query to get all contractors with user details
    const query = `
      SELECT 
        c.user_id AS contractor_id,
        c.company_name,
        c.license_number,
        c.experience,
        u.username,
        u.email,
        u.phone
      FROM 
        contractors c
      JOIN 
        users u ON c.user_id = u.id;
    `;

    const [rows] = await connection.query(query);
    connection.release();
    res.json(rows);

  } catch (err) {
    console.error('Error retrieving contractors with user details:', err);
    res.status(500).send('Error retrieving contractors with user details');
  }
});





module.exports = router;
