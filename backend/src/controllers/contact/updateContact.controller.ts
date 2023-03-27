import { Request, Response } from "express"
import updateContactService from "../../services/contacts/updateContact.service"

const updateContactController = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const id = req.params.id
    const response = await updateContactService(user, parseInt(id));

    if (response.contact_id){
          return res.status(200).json({
    message: "contacts successfully updated"
    })
    }
    return res.status(401).json({
      message: "contact not found"
      })
    

  } catch (error) {
    if(error instanceof Error) {
      return res.status(401).json({
        message: error.message
      })
    }


  }
}

export default updateContactController;
