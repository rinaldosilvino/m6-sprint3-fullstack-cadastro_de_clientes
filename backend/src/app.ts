import "reflect-metadata"
import express from "express"
import userRouter from "./routes/client.router"
import contactsRouter from "./routes/contact.router"


const app = express()

app.use(express.json())

app.use("/clients", userRouter)
app.use("/contacts", contactsRouter)


export default app