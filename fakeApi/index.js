const express = require("express")
const app = express()

// app.get('/', function(req,res){
//     res.send("<h1>Welcome TO your server</h1>")
// })

app.get('/home', function(req,res){
    res.json(
        {
            "name": "swayam",
            "city": "kop"
        }
    )
})

app.listen(4000, function(){
    console.log("server started at 4000")
})