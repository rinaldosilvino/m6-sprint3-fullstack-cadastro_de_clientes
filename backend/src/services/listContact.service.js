import contacts from "../database";


const listContactService = (id) => {
    const index = contacts.findIndex((element) => element.id.toString() === id.toString())
    return  contacts[index]
}

export default listContactService