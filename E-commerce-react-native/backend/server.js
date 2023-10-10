const express = require("express");
const cors = require("cors")

const mongoose = require("mongoose")

const dbUrl = require("./config/configDb")

/*
username i password
username:
filipjovicccc

mongoDb-link: 
dburl: mongodb+srv://filipjovicccc:<password>@mongopractice.ixn3ru6.mongodb.net/

*/



const app = express();
app.use(cors())


mongoose.connect(dbUrl).then(()=> {
  console.log("Connected to MongoDB")
}).catch((err) => {
  console.log(err)
})


app.use(express.urlencoded({extended:true}))
app.use(express.json())

//izvlacenje iz baze


//findOne metoda za nalazenje jedno
//updateOne za updajtovanje jednog
//deleteOne za brisanje jednog iz baze
//.sue metoda

//kada ima index.js file automatski trazi nekad ne mora da se kaze
//index.js zato dole ovde pisemo ./routes

app.use("/", require("./routes"))

app.listen(4000, () => {
  console.log("Server running...");
});
