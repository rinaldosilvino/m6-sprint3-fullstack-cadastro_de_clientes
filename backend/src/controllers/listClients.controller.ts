import { Request, Response } from "express";
import listClientsService from "../services/clients/listClients.service";
const listClientsController = async (req: Request, res: Response) => {
    try {
      const users = await listClientsService()

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default listClientsController;
