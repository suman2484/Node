const express = require('express');
const router = express.Router();
const Person = require('../models/person.model');

// GET /person: Retrieve all people
router.get('/', async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /person: Create a new person
router.post('/', async (req, res) => {
  const person = new Person({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    mobileNumber: req.body.mobileNumber,
  });

  try {
    const newPerson = await person.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT /person/:id: Update a person by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /person/:id: Delete a person by ID
router.delete('/:id', async (req, res) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.json({ message: 'Person deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;