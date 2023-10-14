const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    dateOfBirth: {
        type: Date,
   
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model("UserModel", UserSchema)

module.exports = UserModel
// new Mongoose kao vec stvorne konstruktor funkcija
//i mongoose.model