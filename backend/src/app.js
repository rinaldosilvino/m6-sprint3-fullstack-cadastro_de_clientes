import express from "express";
import "dotenv/config"
import clientRoutes from "./routes/clients.routes";
import contactRoutes from "./routes/contacts.routes";

const app = express();
app.use(express.json());
app.use('',clientRoutes)
//app.use('', contactRoutes)

app.listen(3002, () => {
    console.log(`server is running at port 3002`)
});

export default app  