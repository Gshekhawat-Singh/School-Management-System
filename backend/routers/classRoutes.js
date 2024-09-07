
const express = require('express');
const router = express.Router();
const Class = require('../models/Class'); 


 


 router.get('/', async (req, res) => {
   try {
     const classes = await Class.find();
     res.json(classes);
   } catch (err) {
     res.status(500).json({ message: err.message });
   }
 });

//  post api
router.post('/', async (req, res) => {
  try {
    
    const newClass = new Class({
      name: req.body.name,
      description: req.body.description,
    });

   
    const savedClass = await newClass.save();

    
    res.status(201).json(savedClass);
  } catch (error) {
    
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

