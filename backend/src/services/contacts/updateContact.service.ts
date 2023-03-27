import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { IContactUpdate } from "../../interfaces/contacts";

const updateContactService = async ( {nome,email,telefone}: IContactUpdate, contact_id:number): Promise<Contacts> => {

  const contactRepository = AppDataSource.getRepository(Contacts);
  const contacts = await contactRepository.find()
  
  const contact = contacts.find(user => user.contact_id === contact_id)
  if(!contact){
    return new Contacts
  }

  await contactRepository.update( contact_id, { nome: nome, email: email, telefone: telefone})

  const contactsUpdate = await contactRepository.findOneBy({contact_id:contact_id})

  return contactsUpdate!;

}


export default updateContactService;
