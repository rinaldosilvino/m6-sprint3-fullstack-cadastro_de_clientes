import { DataSource } from "typeorm"
import "dotenv/config"
import { Clients } from "./entities/client.entity"
import { Contacts } from "./entities/contact.entity"

const AppDataSource = new DataSource(
    {
        type: "postgres",
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
        logging: true,
        synchronize: false,
        entities: [Clients, Contacts],
        migrations: ['src/migrations/*.ts']
    }
)

export default AppDataSource