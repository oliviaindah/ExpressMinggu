//import express library
const express = require ("express")

//import router library from express
const router = express.Router()

//fungsi Hello World
const helloworld = (request,  respond)=>
respond.send("Hello World")

//fungsi user get 
const userFunction = (req, res)=> {
    const{name, address } = req.params

    res
    .status(200)
    .json({
        name,
        address,
    })
}

//get root request
router 
    .get("/",helloworld)

router
    .get("/:name/address", userFunction)

module.exports = router