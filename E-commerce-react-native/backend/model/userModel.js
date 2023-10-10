const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    isAdmin:{type:Boolean, default:false},
    image:{type: String, default: null},
    createdAt:{type: Date, default: ()=> {
        new Date().getTime()
    }}

})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel


//new Schema je klasa koje prima object
//funkcija koja prima object ({})

//mySql datatipe

//Isto standardno u komunikaciji za bazama ispisivanje type required i slicno

//Funkcionisanje sa adminom jako zanimljivo treba doci do toga

//da postavljamo kao admin admin panel, super admin da dodeljuje ko je kome admin
//itd postavljenje admina, u super admina
//naknadno proserivanje seme pazljivo