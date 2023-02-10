import { Request, Response } from "express";
import listContactService from "../../services/contacts/listContacts.service";


const listContactsController = async (req: Request, res: Response) => {
    try {
      const users = await listContactService()

      return res.status(200).json(users);

    } catch (error) {
        if(error instanceof Error){
              return res.status(403).json({
                message: error.message
            })
        }
    }

}

export default listContactsController;
