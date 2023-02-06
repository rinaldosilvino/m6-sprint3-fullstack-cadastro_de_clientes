import contacts from "../database";

const updateContactService = (id,contact) => {
    const contactData = {
        ...contact,
        updateOn:new Date()
    }
    const index = contacts.findIndex((element) => element.uuid === id)
    contacts[index] = {...contacts[index],...contactData}
    delete contacts[index].password
    return contacts[index]
}

export default updateContactService