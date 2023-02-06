import clients from "../database";

const updateclientService = (id,client) => {
    const clientData = {
        ...client,
        updateOn:new Date()
    }
    const index = clients.findIndex((element) => element.uuid === id)
    clients[index] = {...clients[index],...clientData}
    delete clients[index].password
    return clients[index]
}

export default updateclientService