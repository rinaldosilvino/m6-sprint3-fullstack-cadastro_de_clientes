import AppDataSource from "../../data-source";
import { Clients } from "../../entities/client.entity";

const deleteClientService = async (clients_id: number) => {

  const userRepository = AppDataSource.getRepository(Clients);

  await userRepository.delete(clients_id)
}


export default deleteClientService;
