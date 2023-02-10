import { Request, Response } from "express";
import findByContactService from "../../services/contacts/findByContact.service";

const findByIdContactController = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id)
      const users = await findByContactService(id)

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default findByIdContactController;
