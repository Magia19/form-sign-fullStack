import userService from "../services/user.service.js"

const create = async (req,res) => {
    
    const {username,password} = req.body;

    if(!username || !password) {
        res.status(400).send({message:"submit all fields for registration"})
    }

    const user = await userService.createUserService(req.body);

    if(!user){
        return res.status(400).send({message:"error creating user"})
    }

    res.status(201).send({
     message:"user created successfully"
    ,
     user: {
            id: user._id,
            username,
        },
    })
}



const findAll = async (req, res) => {
    
    const user = await userService.findAllUserService();
        if(user.length === 0){
            res.status(400).send({message:"here are no registered user"})
        }
        res.send(user)
}



const findById = (req, res) => {
    const user = req.user
    res.send(user)

}



const update = async (req, res) => {
    const username = req.body
        if(!username) {
            res.status(400).send({message:"submit fields for registration"})
        }

        const id = req.id;

        await userService.updateUserService(id, username);

        res.send("user sucessfuly update!")

}


export default {
    create, 
    findAll,
    findById,
    update
}