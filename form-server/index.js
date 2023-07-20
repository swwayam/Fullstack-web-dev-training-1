const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/user")

const app = express()
const PORT = 4000

// middleware

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors({
    origin: '*'
}));

mongoose.connect("mongodb+srv://mongo:mongo@cluster0.t5dl1ph.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/",async (req, res) => {
    const data = await User.find()
    res.status(200).json(data  )
})

app.post("/add/user", (req,res) => {
    const name = req.body.name
    const pass = req.body.pass

    const user = new User({
        name,
        pass
    })   

    user.save().then(obj => {
        console.log(obj)
        res.status("200").send("The Data Was Added")
    }).catch(err => {
        console.log(err)
    })
})

app.listen(PORT, () => {
    console.log(`the server is running at port ${PORT}`);
})