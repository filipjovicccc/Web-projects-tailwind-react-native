const express = require("express")
const UserModel = require("../model/userModel")
const router = express.Router()

const app = express()

//pomocu metodte find koristimo objeck unutra jer preko objecta pristupa bazi
router.get("/allUsers", require("../controler/userControler/getAllUsers"))

router.get("/:firstName", require("../controler/userControler/getUser"))

router.get("/addUser", require("../controler/userControler/addUser"))


module.exports = router