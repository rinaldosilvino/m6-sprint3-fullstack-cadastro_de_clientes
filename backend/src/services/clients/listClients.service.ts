import AppDataSource from "../../data-source";
import { Clients } from "../../entities/client.entity";
import { IClient } from "../../interfaces/clients";
import { getMetadataArgsStorage } from 'typeorm';

const listClientsService = async () :Promise<IClient[]> => {
    const userRepository = AppDataSource.getRepository(Clients)
    console.log(getMetadataArgsStorage().tables)
    const response = await userRepository.find()
    console.log(response)
    const users = response.map(user => {
      return user;
    })

    return users ? users : [];
}

export default listClientsService;
