import { Request, Response } from "express"
import deleteClientService from "../services/clients/deleteClient.service"


const deleteClientController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    await deleteClientService(parseInt(id))
    return res.status(204).send()
  } catch (error) {
    let code = 400
    if(error instanceof Error){
      if(error.message === "You don't have admin permission"){
        code = 403
      }else if(error.message === "Id not found"){
        code = 404
      }
      return res.status(code).json({
       message: error.message
      })
    }
}
  }
export default deleteClientController;