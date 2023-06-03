import { Request, Response } from "express";
import {cliente}from "../src/entity/cliente";
import { AppDataSource } from "../src/data-source";


class clienteController{
    
    static getAll = async (req:Request, resp:Response)=>{
        
        try{
            const findClients = AppDataSource.getRepository(cliente);
            const clients = await findClients.find();
            resp.json(clients);
        }catch(error){
            resp.status(500).json({message: 'Error to find the clients. Please verify if there are people in registered' })
            
        }

    }
    
    static getById = async (req: Request, resp: Response) => {
        return resp.status(200).json({mensaje:'The client is already registered in the database'});


    }   
    
      
    
    static add = async (req:Request, resp:Response)=>{
        
    }
    static update = async (req:Request, resp:Response)=>{
        
    }
    static delete = async (req:Request, resp:Response)=>{
        
    }

}

export default clienteController;
