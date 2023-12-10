const express = require("express");
const db = require("./db.js")
const app=express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("server-working");
});
const port= process.env.PORT || 8000;
app.listen(port,()=>'server ruuning on port');