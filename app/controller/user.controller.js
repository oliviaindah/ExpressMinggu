//fungsi Hello World
const helloworld = (request,respond)=>
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
//get employee data
const getEmployee = (req, res)=> {
    const dummyEmployee ={
        name: "Sarah",
        address: "Silicon Valley",
        birth_date: "1992-09-10",
        hire_date: "2010-07-05",
    }

    return res
    .status(200)
    .json  (dummyEmployee)
}

//insert one employee
const addOneEmployee = (req, res)=>{
    const { name, address } = req.body

    return res
    .status(200)
    .json({
        name,
        address,
    })
}

//exports function
module.exports = {
    helloworld,
    userFunction,
    getEmployee,
    addOneEmployee,
}
