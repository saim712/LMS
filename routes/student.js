var express=require("express");
var router= express.Router();
//GET Routes
router.get('/',function(req,res,next){
    res.send("Student Dashboard");
});

// route to add student to student collection
router.post('/stu', async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student);
    } catch (e) {
      res.status(400).send(e);
    }
  });

module.exports=router;