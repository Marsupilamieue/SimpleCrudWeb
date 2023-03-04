import mongoose from "mongoose";

const User = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    status:{
        type:String,
        required:true
    },
});

export default mongoose.model("User",User);