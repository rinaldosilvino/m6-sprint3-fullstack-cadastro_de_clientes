import AppDataSource from "../../data-source";
import { IContactsRequest } from "../../interfaces/contacts";
import { Contacts } from "../../entities/contact.entity";
import { Clients } from "../../entities/client.entity";


const createContactService = async ({nome,email,telefone, data_de_registro, client_id}:IContactsRequest): Promise<Contacts> => {
    const clientRepository = AppDataSource.getRepository(Clients)
    const contactRepository = AppDataSource.getRepository(Contacts)
    const client = await clientRepository.findOne({
      where:{
        client_id:client_id
      }
    })
    if(!client){
      return new Contacts
    }
    const contact = new Contacts()
      contact.nome = nome,
      contact.email = email,
      contact.telefone = telefone,
      contact.data_de_registro = new Date(),
      contact.client_id = client_id
    await contactRepository.save(contact)

    return contact;

}

export default createContactService;
