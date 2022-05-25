const mongoose= require("mongoose")
const userSchema = new mongoose.Schema({
    first_name :{type:String ,required:true},
    last_name :{type:String,required:true},
    age:{type:String},
    dateofbirth:{type:String}

})
const user = mongoose.model("user",userSchema)
module.exports=user