import { Entity, Column, PrimaryGeneratedColumn } from "typeorm" 

@Entity()
export class Clients {
    @PrimaryGeneratedColumn()
    client_id: number;

    @Column({length: 120})
    nome: string;

    @Column({length: 60,unique:true})
    email: string;

    @Column({length: 20,unique:true})
    telefone: string;

    @Column()
    data_de_registro: Date;
}
