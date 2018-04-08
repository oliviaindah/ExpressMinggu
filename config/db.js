//call the library
const mongos = require ("mongos")

//kaljay database
const DB_URL = "mongodb://localhost:27017/kaljay_epos"

//connect your database
mongoose.connect(DB_URL)

//Event handling for connection
//if successed or connected
mongoose.connection.on ("connected"), () =>
    console.log(`mongoose.connected to ${DB_URL})`)

// if error
mongoose.connection.on("error", (err) =>
    console.error(`mongoose fail on: ${err}`))

// if disconnected
mongoose.connection.on("disconnected",() =>
    console.log("mongoose successfully disconnected"))

// if suddenly shutdown
const gracefullShutdown = (msg, callback)=>
    mongoose.connection.close(()=> {
        console/log(`mongoose disconnected through ${msg}`)
        callback()
    })

// if app terminate
process.on("SIGINT",() =>
    gracefullShutdown("APP Termination(SIGINT)",()=>
        process.exit(0))
)
    


