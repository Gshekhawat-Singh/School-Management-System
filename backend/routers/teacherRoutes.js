const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');


router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const newTeacher = new Teacher({
    name: req.body.name,
    subject: req.body.subject,
  });

  try {
    const savedTeacher = await newTeacher.save();
    res.status(201).json(savedTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
