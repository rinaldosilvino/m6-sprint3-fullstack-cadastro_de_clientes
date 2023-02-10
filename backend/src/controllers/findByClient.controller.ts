import { Request, Response } from "express";
import findByClientService from "../services/clients/findByClient.service";

const findByIdClientController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const users = await findByClientService(id)

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByIdClientController;
