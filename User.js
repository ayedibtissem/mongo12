const moogoose=require("mongoose")
const userSchema=moogoose.Schema({
    name:{type:String ,required:true},age:Number,favoriteFoods:[String],
}
);
module.exports=moogoose.model("User",userSchema)