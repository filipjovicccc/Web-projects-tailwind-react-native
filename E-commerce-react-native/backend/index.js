const express = require("express")

const mongoose = require("mongoose")

const dbUrl = require("./config/database")

const app = express()
const cors = require("cors")

const routes = require("./routes/index")


app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended: true}))

mongoose.connect(dbUrl).then(
    ()=> {
        console.log("Connected to MongoDB")
    }
).catch(
    (err)=>{
        console.log(err)
    }
)


app.use("/", require("./routes"))

app.listen(4000, ()=> {
    console.log("Server is runing")
})