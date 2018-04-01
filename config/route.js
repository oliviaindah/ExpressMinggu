//import express library
const express = require ("express")

//import router library from express
const router = express.Router()

//import controller to route
const userCtrl = require("../app/controller/user.controller")

//get root request
router 
    .route("/")
    .get(userCtrl.helloworld)

router
    .route("/:name/:address")
    .get(userCtrl.userFunction)

router
    .route("/employee")
    .get(userCtrl.getEmployee)
    .post(userCtrl.addOneEmployee)

module.exports = router