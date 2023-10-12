const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/user", (req, res) => {
const{pat, color}=req.body
console.log(pat)

  const user = {
    name: "Dojan",
    lastName: "Zivkovic",
    job: "developer",
    brbs: "hello"

  }
  res.send(user)
});

app.get("/user"), (req, res)=>{
    res.send("get method")
}

app.listen(4000, () => {
  console.log("Server running...");
});