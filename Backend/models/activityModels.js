const mongoose=require('mongoose');
var uniqueValidator=require('mongoose-unique-validator');

const activitySchema=new mongoose.Schema({
    ciudad: {type:String,require:true,unique:true},
    img: {type:String,require:true}
})

const Activity =mongoose.model('activity',activitySchema);

activitySchema.plugin(uniqueValidator);
module.exports=Activity;