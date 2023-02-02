import mongoose from "mongoose";
const transactionSchema=new mongoose.Schema({
amount:{
    type:Number,
    required:true,

},
category:{
    type:String,
    required:true
},
desription:{
    type:String,
    required:true,
},
refrence:{
    type:String,

},
date:{
    type:Date,
    required:true
}
},{timestamps:true})


const transactionModel=mongoose.model('transactions',transactionSchema);
