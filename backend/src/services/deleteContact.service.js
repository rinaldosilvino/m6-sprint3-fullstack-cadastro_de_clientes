import contacts from "../database";

const deleteContactService = (id) => {
    const index = contacts.findIndex(element => element.id === id)
    contacts.splice(index,1)

    return "contact deleted success"
}

export default deleteContactService