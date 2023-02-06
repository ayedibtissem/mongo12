const express=require("express")
const moogoose = require("mongoose")
const app=express();
moogoose.set("strictQuery",false);
const User=require("./User.js")
moogoose.connect("mongodb+srv://ibticem:12345@cluster0.27hldjk.mongodb.net/?retryWrites=true&w=majority"
   );
async function start(){
const person=await User.create({name:"ibticem",age:25,favoriteFoods:["pizza"]})
}
start();
//async function start(){
    //arrayofPeople=[{name:"s1",age:1,favoriteFoods:"f1"},{name:"s2",age:2,favoriteFoods:"f1"},{name:"s3",age:3,favoriteFoods:"f3"}];
     //await User.create(arrayofPeople);
//}
//start();
//async  function start(){
    //const people=await User.find();
   
    //console.log(people)
//}
//start();
//async  function start(){
   // const person=await User.findOne({name:"ibticem"});
   
    //console.log(person)
//}
//start();
//async  function start(){
    //const people=await User.findById("63e05dc29b20a46138dc1873");
   
    //console.log(people)
//}
//start();
//async function start(){
    //await User.findByIdAndUpdate("63e05dc29b20a46138dc1873",{
    //$push:{favoriteFoods:"sandwich"}  
   // })
//}
//start();
//async function start(){
    //await User.findOneAndUpdate(
       // {name:"ibticem"},{age:21},{new:true}
    //)}
    //start();
    //async function start(){
        //await User.findByIdAndRemove("63e068e6034aaf289869f0b4")
    //}
//start()
//async function start(){
    ///await User.remove({name:"s2"})
//}
//start();
app.listen(3009,()=>{
    console.log("server is running")
})