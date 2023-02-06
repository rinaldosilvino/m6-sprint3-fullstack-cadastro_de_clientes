import contacts from "../database";

const createContactController = async (request, response) => {
    const contact = request.body
    const message_empty = _validateBodyEmpty(contact)
    if(message_empty){
        return response.status(404).json({message:message_empty})
    }
    const newcontact = await createContactService(contact)
    return response.status(201).json(newcontact)
}

const getAllContactController = (request, response) =>{
    return response.status(200).json(contacts)
}

const deleteContactController = (request, response) => {
    const id = request.params.id
    const result = deleteContactService(id)
    return response.status(201).json({message:result})
}

const updateContactController = (request, response) => {
    const {id} = request.params
    const contact = request.body
    const updateContact =  updateContactService(id,contact)
    return response.status(201).json(updateContact)
}

const getByIdContactController = (request, response) =>{
    const id = request.params.id
    const message  = _validateId(id)
    if(message){
        return response.status(404).json({message:message})
    }
    const contact = listContactService(id)
    return response.status(200).json(contact)
}

function _validateBodyEmpty(contact){
    if(!contact.email){
        return "Email is not found"
    }else if(!contact.name){
        return "Name is not found"
    }else if(!contact.password){
        return "Password is not found"
    }else if(typeof contact.isAdm === Boolean){
        return "isAdm is not found"
    }
    return ""
}
const ContactProfileController = (request, response) => {
    const { id } = request.contact;
    const profile = listContactProfileService(id)
    return response.json(profile);
  };

export {createContactController, getAllContactController,getByIdContactController,deleteContactController,updateContactController,ContactProfileController}
