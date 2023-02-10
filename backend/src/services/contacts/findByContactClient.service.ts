import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { IContact } from "../../interfaces/contacts";

const findByContactClientIdService = async (client_id:number):Promise<IContact[]> => {

  const clientsRepository = AppDataSource.getRepository(Contacts);
  const animais= await clientsRepository.find({
    where:{
      client_id:client_id
    }
  })
  return animais.length > 0 ? animais : []

}


export default findByContactClientIdService;
