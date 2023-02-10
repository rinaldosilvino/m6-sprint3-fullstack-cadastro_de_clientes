import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";

const deleteContactService = async (contact_id: number) => {

  const contactsRepository = AppDataSource.getRepository(Contacts);

  await contactsRepository.delete(contact_id)
  
  return "Deletado com sucesso"
}


export default deleteContactService;
