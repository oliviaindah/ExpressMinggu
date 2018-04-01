//calling Library
const Express = require ('express')

//execute express
const app = Express()

// get root request
app.get('/',(request, respond) =>
    respond.send('Hello World'))

app.get('/:name/:address', (req, res) => {
    res
    .status(200)
    .json({
        name: req.params.name,
        address:req.params.address,
    })
})

    //set express to running on port 3000
app.listen(3000)