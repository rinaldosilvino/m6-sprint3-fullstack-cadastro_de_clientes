import { IClientUpdate } from "../../interfaces/clients";
import AppDataSource from "../../data-source";
import { Clients } from "../../entities/client.entity";

const updateClientService = async ( {nome, email, telefone}: IClientUpdate, client_id:number): Promise<Clients> => {

  const clientsRepository = AppDataSource.getRepository(Clients);
  const client = await clientsRepository.findOne({
    where:{
      client_id:client_id
    }
  })

  if(!client){
    return new Clients
  }
  await clientsRepository.update( client_id, { nome: nome, email: email, telefone: telefone})

  const userUpdate = await clientsRepository.findOneBy({client_id:client_id})

  return userUpdate!;

}


export default updateClientService;
