const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const routerEmp = require('./routes/employee')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json());
app.use('/emp',routerEmp);
app.listen(9898,()=>{
    console.log("Server started on Port 9898");
})