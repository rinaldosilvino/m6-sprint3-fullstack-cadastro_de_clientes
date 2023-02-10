import { Response, Request } from "express"
import createContactService from "../../services/contacts/createContact.service"


const createContactController = async (req: Request, res: Response) => {
    try {
        const user = req.body

        const newclients = await createContactService(user)

        const {...newclientRest} = newclients

        return res.status(201).json(newclientRest);

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }

}

export default createContactController;
