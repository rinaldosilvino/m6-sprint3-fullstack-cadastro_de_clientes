import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { IContact } from "../../interfaces/contacts";

const listContactService = async () :Promise<IContact[]> => {
    const userRepository = AppDataSource.getRepository(Contacts)
    const response = await userRepository.find()
    const users = response.map(user => {
      return user;
    })

    return users ? users : [];
}

export default listContactService;
