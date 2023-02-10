export interface IContactsRequest {
    contact_id:number
    nome: string
    email: string
    telefone: string
    data_de_registro: Date
    client_id:number
}

export interface IContact {
    contact_id:number
    nome: string
    email: string
    telefone: string
    data_de_registro: Date
    client_id:number
}

export interface IContactUpdate {
    contact_id:number
    nome: string
    email: string
    telefone: string
    data_de_registro: Date
    client_id:number
}