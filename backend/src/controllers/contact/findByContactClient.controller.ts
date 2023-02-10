import { Request, Response } from "express";
import findByContactClientIdService from "../../services/contacts/findByContactClient.service";

const findByIdContactClientController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const users = await findByContactClientIdService(id)

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByIdContactClientController;
