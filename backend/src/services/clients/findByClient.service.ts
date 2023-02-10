import { IClient, IClientUpdate } from "../../interfaces/clients";
import AppDataSource from "../../data-source";
import { Clients } from "../../entities/client.entity";

const findByClientService = async (client_id:number):Promise<IClient> => {

  const clientsRepository = AppDataSource.getRepository(Clients);
  const client = await clientsRepository.findOne({
    where:{
      client_id:client_id
    }
  })
  return client ? client : new Clients

}


export default findByClientService;
