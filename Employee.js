//Robertha Alvarez 101236645 - FS Dev

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
    {
    
    firstName: {
    type: String,
    required: [true, "F.N is required!!"],
    trim: true,
    lowercase: true
  },
    lastName: {
    type: String,
    required: [true, "L.N is required!!"],
    trim: true,
    lowercase: true
  },
    emailId: {
    type: String,
    required: [true, "Email is required!!"],
    trim: true,
    lowercase: true,
    unique: true,
    validate:
    {
      validator: function(v){
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
    },
        message:"Hiiii - Please enter a valid email please!"
    }
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;