import mongoose from "mongoose";

const connectToAtlasDb = () => {
    console.log("waiting to connect whit Altas Db...")
    mongoose.connect(
       "mongodb+srv://eunada19:Magia119@newtest.nccu2rj.mongodb.net/?retryWrites=true&w=majority&appName=newTest",
       {
        useNewUrlParser:true, useUnifiedTopology:true
       } 
    ).then(() => {console.log("==== Atlas DB is Conected! ====")})
    .catch((err) => {console.log(err)})
}


export default connectToAtlasDb