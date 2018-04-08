// CALL THE DATABASE
require("./config/db")

//calling Library
const express = require ('express')
const path = require ("path")
const bodyParser = require("body-parser")

//execute express
const app = express()

// initiative default port
const defaultPort = 3000

// import router dari config/routes
const router = require ("./config/route")

// set static frontend
app.use(express.static(path.join(__dirname, "public")))
app.use("/node_modules", express.static(__dirname + "node_modules"))

//parsing body from post data
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// add router to express
app.use("/api", router)

//set express to running on port:3000
const server = app.listen(defaultPort,()=> {
    const port = server.address().port 

    console.log(`Magic happen to port: ${port}`)
})