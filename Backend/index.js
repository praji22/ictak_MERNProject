const Express = require("express");
const Body_parser = require("body-parser");
const Mongoose = require("mongoose");
const Cors =  require("cors");
const PORT = 3005;
const Bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const UserModel = require("./models/Users");
const app =new Express();



app.use(Body_parser.json());
app.use(Body_parser.urlencoded({extended:true}));
app.use(Cors());


Mongoose.connect("mongodb+srv://ictakcurriculum:anprs@ictak-curriculum-tracke.k6qgvbb.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true});





//signup for faculty

app.post('/signup',async(req,res)=>{
    
    try {
        let data = {
            Name : req.body.Name,
            Email : req.body.Email,
            Password : Bcrypt.hashSync(req.body.Password,10),
            ConfirmPassword  : Bcrypt.hashSync(req.body.ConfirmPassword,10),
            Place : req.body.Place,
            PhoneNumber : req.body.PhoneNumber
        }
        console.log(data);
        let User = await UserModel.findOne({Email : req.body.Email})
        if(!User){
            const newUser = new UserModel(data);
            const saveUser = await newUser.save();
            res.json(saveUser);
        }
        return res.json({message :"Email already registered"});
       
    } catch (error) {
        console.log(error)
                 
    }
})





// listen
app.listen(PORT,()=>{
    console.log(`Server started listening to port ${PORT}`);
})