const express = require("express")
const cors = require("cors");
const Pizza = require('./src/Models/Pizzamodal.js')
const db = require("./db.js")
const app=express();
app.use(cors());
app.use(express.json());

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute= require('./routes/userRoute')
const ordersRoute= require('./routes/ordersRoute')


app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)
app.get("/",(req,res)=>{
    res.send("server-working");
});

app.get("/getpizzas",(req,res)=>{
    Pizza.find({} , (err , docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs);
        }

    })

});
const port= process.env.PORT || 8000;
app.listen(port, () => 'server ruuning on port');
