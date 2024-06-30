import User from "../model/User.js";


const createUserService = (body) => User.create(body);
const findAllUserService = () => User.find()
const findByIDService = (id) => User.findById(id)
const updateUserService = (id, username) => User.findOneAndUpdate({_id:id},username)


export default {
    createUserService, 
    findAllUserService,
    findByIDService,
    updateUserService
}