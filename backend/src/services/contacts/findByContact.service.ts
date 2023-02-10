import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { IContact } from "../../interfaces/contacts";

const findByContactService = async (contact_id:number):Promise<IContact> => {

  const clientRepository = AppDataSource.getRepository(Contacts);
  const contact= await clientRepository.findOne({
    where:{
      contact_id:contact_id
    }
  })
  return contact ? contact : new Contacts

}


export default findByContactService;
