//calling Library
const Express = require ('express')

//execute express
const app = Express()

// import router dari config/routes
const router = require ("./config/route")

// add router to express
app.use("/", router)

 //set express to running on port 3000
app.listen(3000)

// // get root request
// app.get('/',(request, respond) =>
//     respond.send('Hello World'))



// app.get('/:name/:address', (req, res) => {
//     res
//     .status(200)
//     .json({
//         name: req.params.name,
//         address:req.params.address,
//     })
// })