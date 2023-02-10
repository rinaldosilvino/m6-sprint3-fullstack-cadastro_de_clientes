import { Response, Request } from "express"
import createClientService from "../services/clients/createClient.service"


const createClientController = async (req: Request, res: Response) => {
    try {
        const user = req.body

        const newclients = await createClientService(user)

        const {...newclientsRest} = newclients

        return res.status(201).json(newclientsRest);

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }

}

export default createClientController;
