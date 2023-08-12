import express from "express";
const app=express();
const port=3000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});
app.get('/',(req,res)=>{
    const today=new Date();
    let day=today.getDay();
    var dType; var msg;
    if(day===0 || day===6){
        dType="weekend";
        msg="have some fun";
    }
    else{
        dType="weekday";
        msg="work hard af";
    }
    res.render("index.ejs",{
        dayType: dType,
        messg: msg,
    });
});