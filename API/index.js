import express from 'express'
import mogoDbAtlasConection from "./data/db.js"
import routerUser from './router/user.router.js';

const app = express();
const serveListenPort = 3000;



mogoDbAtlasConection();
app.use(express.json())
app.use("/user",routerUser)

app.listen(serveListenPort, () => console.log(`Serve up on port ${serveListenPort}...`))