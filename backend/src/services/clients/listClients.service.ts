import AppDataSource from "../../data-source";
import { Clients } from "../../entities/client.entity";
import { IClient } from "../../interfaces/clients";

const listClientsService = async () :Promise<IClient[]> => {
    const userRepository = AppDataSource.getRepository(Clients)

    const response = await userRepository.find()

    const users = response.map(user => {
      return user;
    })

    return users ? users : [];
}

export default listClientsService;
