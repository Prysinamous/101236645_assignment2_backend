//Robertha Alvarez 101236645 - FS Dev

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise= global.Promise;
const employeeRouter = require('./routes/EmployeeRoutes.js');
const app = express();



app.use(express.urlencoded({extended:true}))
app.use(express.json());

mongoose.connect('mongodb+srv://robbi:Minionisfat12@comp3123.dnlob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.get('/',(req,res) =>
{
    res.send("Assignment 2 by Robertha A.D (Full Stack Dev) ^")
});

app.use(employeeRouter);

app.listen(9090, () => { console.log('Server is running on port 9090!') });