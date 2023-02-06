import clients from "../database";
import { v4 as uuidv4 } from "uuid"
import {hash} from "bcryptjs"

const createclientService = async (client) => {
    const {name,email,phone, isAdm} = client
    clients.push({
        name,
        email,
        phone,
        isAdm,
        uuid: uuidv4(),
        createdOn: new Date(),
        updatedOn: new Date(),
    })
    return {
        name,
        email,
        isAdm,
        uuid: uuidv4(),
        createdOn: new Date(),
        updatedOn: new Date(),
    }
}

export default createclientService