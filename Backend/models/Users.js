const Mongoose = require("mongoose");
const Schema = Mongoose.Schema


const UserSchema = new Schema({

    Name  : {
        type : String,
        required : true
    },

    Email : {
        type :String,
        required : true
    },

    Password : {
        type : String,
        required : true
    },

    // ConfirmPassword : {
    //     type : String,
    //     required : true
    // },

    Place : {
        type : String,
        required : true
    },

    PhoneNumber: {
        type : Number,
        required : true
    }

});

let UserModel = Mongoose.model("Users",UserSchema);

module.exports = UserModel; 