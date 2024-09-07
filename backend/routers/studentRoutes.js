const express = require('express');
const router = express.Router();
const Student = require('../models/Student');


router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
    age: req.body.age,
    class: req.body.class,
  });

  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

  



module.exports = router;

