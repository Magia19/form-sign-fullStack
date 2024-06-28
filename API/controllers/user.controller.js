import userService from "../services/user.service.js"

const create = async (req, res) => {
    const {username, password} = req.body

        if(!username || !password){
            res.status(400).send({message:"submit all fields for registration"})
        }

        const user = await userService.userCreateService(req.body);
            if(!user){
                res.status(400).send({message:"error creating user"})
            }
            res.status(201).send({
                message: "user created successfully",
                id: user._id,
                username,
                password
            })

}

const findAll = (req, res) => {
    
}



export default {create}