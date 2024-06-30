import mongoose from "mongoose";
import userService from "../services/user.service.js";

export const validID = (req, res, next) => {
    try{

    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid){
        res.status(400).send({message:"invalid ID"})
    }
    next();
    
    }catch(err){
    res.status(500).send({message: err.message})
}
}

export const validUser = async (req, res, next) =>{
   
    try{

    const id = req.params.id;
    const user = await userService.findByIDService(id);

    if(!user){
        res.status(400).send({message:"user not found"})
    }

    req.id = id;
    req.user = user;
    next();
    }catch(error){
        res.status(500).send({message:error.me})
}
}
