import contacts from "../database";
import { v4 as uuidv4 } from "uuid"
import {hash} from "bcryptjs"

const createContactService = async (contact, id) => {
    const {name,email,phone, isAdm} = contact
    contacts.save({
        name,
        email,
        phone,
        uuid: uuidv4(),
        createdOn: new Date(),
        updatedOn: new Date(),
    })
    return {
        name,
        email,
        uuid: uuidv4(),
        createdOn: new Date(),
        updatedOn: new Date(),
    }
}

export default createContactService;