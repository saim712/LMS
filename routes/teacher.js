const express = require('express');
const mongoose = require('mongoose');
const Teacher = require('../models/teacher');
const Class = require('../models/class');

const router = express.Router();

// Route to get the list of classes taught by a teacher
router.get('/teacher/classes', async (req, res) => {
    try {
        const teacherId = req.query.teacherId; // Assuming you pass the teacher ID as a query parameter

        if (!teacherId) {
            return res.status(400).json({ error: 'Teacher ID is required' });
        }

        // Find classes taught by the specific teacher
        const classes = await Class.find({ 'teachers.tid': teacherId }).populate('teachers.tid');

        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching classes' });
    }
});

module.exports = router;
