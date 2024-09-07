require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173' }));

mongoose
  .connect(process.env.MONGO_URI, {
   
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


app.use('/classes', require('./routers/classRoutes'));
app.use('/teachers', require('./routers/teacherRoutes'));
app.use('/students', require('./routers/studentRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
