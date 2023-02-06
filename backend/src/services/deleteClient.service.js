import clients from "../database";

const deleteclientService = (id) => {
    const index = clients.findIndex(element => element.id === id)
    clients.splice(index,1)

    return "client deleted success"
}

export default deleteclientService