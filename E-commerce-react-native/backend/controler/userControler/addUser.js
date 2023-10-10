const UserModel = require("../../model/userModel")

const addUser = (req, res) =>{
    let user = {
        firstName: "Zoki",  
        lastName: "Zoranovic",         
        email: "zorko@gmail.com",
        password: "12345",
      }
       
      //sacuvanje usera u bazu .save obavezno
      //objectid, dodaje sam mongodb, i ako nismo u nasim podacima upisali id
      //
      let newUser = new UserModel(user)
    
       newUser.save().then((data)=>{
           console.log(data)
       }).catch((err)=> {
         console.log(err)
       })
    
      res.send("OK")
    }

    module.exports = addUser
   