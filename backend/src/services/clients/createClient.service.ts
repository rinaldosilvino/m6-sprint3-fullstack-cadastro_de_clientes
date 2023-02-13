import { Clients } from "../../entities/client.entity";
import { IClientRequest } from "../../interfaces/clients";
import AppDataSource from "../../data-source";

const createClientService = async ({nome,email, telefone}:IClientRequest): Promise<Clients> => {

    const userRepository = AppDataSource.getRepository(Clients)
    const user =  new Clients()
    user.nome = nome;
    user.email = email;
    user.telefone = telefone;
    user.data_de_registro = new Date()
    await userRepository.save(user)

    return user;

}

export default createClientService;
