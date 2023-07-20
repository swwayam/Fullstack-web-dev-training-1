const express = require("express")
const app = express()

const port = "7000"

app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Here Todo App Data Will Load</h1>")
})


app.post('/todo/:id', (req, res) => {
    console.log(req.params)
    

    if(!req.body.todo){
        res.status("400").send({message : "Todo not received"})
    }
    
    res.status("200").send({mes:"the todo is " + req.body.todo + " and the id is " + req.params.id})
    
})



app.listen(port, function(){
    console.log(`The Server Is Running ${port}`);
})

// let and const
// arrow functions = normal functions

// normal function 

// function add(a,b){
//     return a + b
// }

// // arrow function

// const add = (a,b) => {
//     return a + b;
// }