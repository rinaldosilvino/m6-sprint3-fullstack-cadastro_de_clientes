export interface IClientRequest {
    client_id: number
    nome: string
    email: string
    telefone: string
    data_de_registro: Date
}

export interface IClient {
    client_id:number
    nome: string
    email: string
    telefone: string
    data_de_registro: Date
}

export interface IClientUpdate {
    client_id: number
    nome: string
    email: string
    telefone: string
    data_de_registro: Date
}