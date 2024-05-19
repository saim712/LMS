var mongoose =require("mongoose");
var studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
});
module.exports=mongoose.model('Students',studentSchema);