const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Import routes
const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

app.post('/api/auth/register', (req, res) => {
    const { name, email, password } = req.body;
    // Logic to handle registration, e.g., saving to a database
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    // Simulate successful registration
    res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Logic to handle registration, e.g., saving to a database
  if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
  }
  // Simulate successful registration
  res.status(201).json({ message: 'User Logged in successfully' });
});

app.get('/api/test', (req, res) => res.json({ ok: true }));

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/poster-flier';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 

// const express = require('express');
// const app = express();

// app.get('/api/test', (req, res) => res.json({ ok: true }));

// app.listen(5000, () => {
//   console.log('Test server running on port 5000');
// });