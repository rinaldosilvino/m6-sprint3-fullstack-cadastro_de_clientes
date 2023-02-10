import { DataSource } from "typeorm"
import "dotenv/config"
import { Clients } from "./entities/client.entity"
import { Contacts } from "./entities/contact.entity"

const AppDataSource = new DataSource(
    {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "Ricardo09",
        database: "test_dataBase",
        logging: true,
        synchronize: false,
        entities: [Clients, Contacts]
    }
)

export default AppDataSource