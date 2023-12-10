const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://Gofood:2xdAPjSNiJuqBs1p@cluster0.diuypdy.mongodb.net/'
mongoose.connect(mongoURL , { useUnifiedTopology:true, useNewUrlParser:true})
var db = mongoose.connection
db.on('connected',()=>{
    console.log('MongoDB connection Successfully')
})
db.on('error',()=>{
    console.log('MongoDB connection failed')
})

module.exports = mongoose