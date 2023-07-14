import * as express from "express"
import { Request, response } from "express"
import { AppDataSource } from "./data-source"
import cors = require("cors")
import helmet from "helmet"
import routes from "./routes"

const PORT=process.env.PORT || 3000; //por defecto los servidores van a tener esta variable, para obtener el puerto que tiene el servidor

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors()); 
    app.use(helmet()); 
    app.use(express.json()); 

     //rutas
    app.use('/',routes)

  

    // start express server
    app.listen(PORT,()=>{
        console.log(`Servidor corriendo en puerto: ${PORT}`)});

   

}).catch(error => console.log(error))
