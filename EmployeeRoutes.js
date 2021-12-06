//Robertha Alvarez 101236645 - FS Dev

const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//1 all employee resources are fetched
app.get('/api/v1/employees', async (req, res) => {
  const employees = await employeeModel.find({});

  try {
    res.send(employees)
    res.status(200).send("OK")

  } catch(err) {
    console.log("Error: " + err)
    res.status(500).send(err);
  }
})

//2 a new employee resource is created
app.post('/api/v1/employees', async (req, res) => {
    const employee = new employeeModel(req.body);
    try {
      await employee.save()
      res.send(employee)
      res.status(201).json({status: "Created"})
    }

    catch(err) {
      console.log("Error, Employee is NOT SAVED!")
      res.status(500).send(err);
    }
});

//3 one employee resource is fetched
app.get('/api/v1/employees/:id', async (req, res) => {

    try
    {
       const id= await employeeModel.findById(req.params.id)
        res.send(id)
        res.status(200).send("OK")
    }

    catch(err) {
      console.log("ERROR:" + err)
        res.status(500).send(err);
    }
});

//4 employee resource is updated
app.put('/api/v1/employee/:_id', async (req, res) => {
    try {
      await employeeModel.findByIdAndUpdate(req.params._id, req.body)
      employee = await employeeModel.save()
      res.send(employee)
      console.log("Employee succesfully updated <3")
      res.status(200).json({status: "OK"})
      
    } 
    
    catch(err) 
    {
      console.log("ERROR: employee not updated" + err)

      res.status(500).send(err)
    }
  })


//5 employee resource is deleted
app.delete('/employee/:_id', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.params._id)
      if (!employee)res.status(404).json({status: "No employee found!"})
      res.status(204).json({status: "No Content"})
    }
    
    catch(err) {
      res.status(500).send(err)
    }
  })


module.exports = app



