import user from "../model/User.js";

const userCreateService = (body) => user.create(body);
const findAllService = () => user.find()


export default {userCreateService, findAllService}