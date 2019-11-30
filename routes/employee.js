const express = require('express')
const db = require('../db.js')
const utils = require('./utils.js')
const router = express.Router();

router.get('/',(req,res)=>{
    const connection = db.connect()
    const statement = `select * from employee`
    connection.query(statement,(error,data)=>{
        connection.end();
        const result = utils.createResult(error,data)
        res.send(result)
        
    })
})

router.post('/',(req,res)=>{
    const {name,address,email} = req.body
    const connection = db.connect()
    const statement = `insert into employee(name,address,email) values('${name}','${address}','${email}')`
    connection.query(statement,(error,data)=>{
        connection.end();
        const result = utils.createResult(error,data)
        res.send(result)
    })
})

router.put('/:id',(req,res)=>{
    const id = req.params.id
    const {name,address,email} = req.body
    const connection = db.connect()
    const statement = `update employee set name ='${name}',address ='${address}',email ='${email}' where id = ${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result = utils.createResult(error,data)
        res.send(result)
    })

})

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    //const {name,address,email} = req.body
    const connection = db.connect()
    const statement = `delete from employee where id = ${id}`
    connection.query(statement,(error,data)=>{
        connection.end()
        const result = utils.createResult(error,data)
        res.send(result)
    })

})

module.exports = router ;