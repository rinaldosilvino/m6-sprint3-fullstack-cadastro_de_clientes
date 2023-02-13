import "reflect-metadata"
import express from "express"
import userRouter from "./routes/client.router"
import contactsRouter from "./routes/contact.router"
import cors from 'cors'

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials:true,
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar']
};

const app = express()
app.use(cors(options))

app.use(express.json())

app.use("/clients", userRouter)
app.use("/contacts", contactsRouter)


export default app