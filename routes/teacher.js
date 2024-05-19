var express = require("express");
var router = express.Router();


router.get('/',(req,res)=>{
    res.send('TEACHER DASHBOARD');
})


// GET /teacher/classes
router.get('/classes', async (req, res) => {
  try {
    const classes = await Class.find({ teachers: { $elemMatch: { tid: req.teacherId } } });
    res.json(classes);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET /teacher/classes/:id
router.get('/classes/:id', async (req, res) => {
  try {
    const classId = req.params.id;
    const classes = await Class.findOne({ _id: classId, teachers: { $elemMatch: { tid: req.teacherId } } });
    if (!classes) {
      return res.status(404).send("Class not found");
    }
    res.json(classes);
  } catch (e) {
    res.status(400).send(e);
  }
});

// GET /teacher/students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find({ classes: { $elemMatch: { tid: req.teacherId } } });
    res.json(students);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
