import mongoose from "mongoose";

 const  userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
    },
    password: {
        type:String,
        require: true,
    }
 })

 const user = mongoose.model("user", userSchema);

 export default user;