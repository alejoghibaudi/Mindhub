const mongoose=require('mongoose');
var uniqueValidator=require('mongoose-unique-validator');

const userSchema=new mongoose.Schema({
    first_name: {type:String,require:true},
    last_name: {type:String,require:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    date:{type:Date,default:Date.now}
})

const User = mongoose.model('users',userSchema);

userSchema.plugin(uniqueValidator);
module.exports=User;