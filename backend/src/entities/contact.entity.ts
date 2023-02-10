import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Clients } from "./client.entity"


@Entity()
export class Contacts {
    @PrimaryGeneratedColumn()
    contact_id: number;
    
    @Column({length: 120})
    nome: string;

    @Column({length: 60})
    email: string;

    @Column({length: 20})
    telefone: string;

    @Column()
    data_de_registro: Date;

    @Column()
    client_id:number;
}
