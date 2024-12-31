import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// To resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Feedback submission endpoint
app.post('/submit-feedback', (req, res) => {
  const feedbackFilePath = path.join(__dirname, 'feedback.json');
  const newFeedback = req.body;

  // Read existing feedback data
  fs.readFile(feedbackFilePath, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).send('Error reading feedback file');
    }

    let feedbackData = [];
    if (data) {
      feedbackData = JSON.parse(data);
    }

    feedbackData.push(newFeedback);

    // Save updated feedback data
    fs.writeFile(feedbackFilePath, JSON.stringify(feedbackData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving feedback');
      }
      res.send('Feedback submitted successfully');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
