import { Request, Response } from "express"
import updateClientService from "../services/clients/updateClient.service"


const updateClientController = async (req: Request, res: Response) => {
  try {
    const user = req.body
    const id = req.params.id

    await updateClientService(user, parseInt(id))

    return res.status(200).json({
    message: "user successfully updated"
    })
  } catch (error) {
    if(error instanceof Error) {
      return res.status(401).json({
        message: error.message
      })
    }


  }
}

export default updateClientController;
