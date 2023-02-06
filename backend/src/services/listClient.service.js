import clients from "../database";
import { v4 as uuidv4 } from "uuid"

const listclientService = (id) => {
    const index = clients.findIndex((element) => element.id.toString() === id.toString())
    return  clients[index]
}

export default listclientService