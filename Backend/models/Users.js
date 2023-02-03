const Mongoose = require("mongoose");
const Schema = Mongoose.Schema


const UserSchema = new Schema({

    firstName  : {
        type : String,
        required : true
    },
    lastName  : {
        type : String,
        required : true
    },

    email : {
        type :String,
        required : true
    },
    phoneNumber: {
        type : Number,
        required : true
    },

    password : {
        type : String,
        required : true
    },

     confirmPassword : {
         type : String,
         required : true
     }

    

    

});

let UserModel = Mongoose.model("Users",UserSchema);

module.exports = UserModel; 