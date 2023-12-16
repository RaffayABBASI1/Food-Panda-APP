const mongoose = require("mongoose");

const userSchema = mangoose.Schema({
    name : {type: String , require},
    email : {type: String , require},
    password : {type: String , require},
    isAdmin: {type: Boolean , require, default:false},
},{

    timestamps: true,

})

module.exports = mangoose.model('users', userSchema)