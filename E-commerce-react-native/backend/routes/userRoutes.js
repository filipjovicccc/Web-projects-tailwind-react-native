const express = require("express");
const router = express.Router()
const UserModel = require("../models/user")

router.get("/", (req, res) => {

    const user = {
        name: "Miroslav",
        lastName: "Marinkovic",
        password: "zoksula"
    }
    const newUser = new UserModel(user)
    
    newUser.save().then(
        (result) => {
            console.log(result)
    
        }
    ).catch(
        (err) => {
            console.error(err)
            res.status(500).send("Error saving user");
        }
    )
    res.send("OK")
})


module.exports = router