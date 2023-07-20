const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass:{
        type: String,
        required: true
    }
})

module.exports = new mongoose.model("user",userSchema)