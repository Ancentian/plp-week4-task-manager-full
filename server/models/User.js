const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email : {
        type: string,
        required: true,
        unique:true
    },
    password: {
        type:string,
        required:true,
    },
    role: {
        type: string,
        enum: ["developer", "admin"], default: "developer"
    }
})

module.exports = mongoose.model("User", userSchema)