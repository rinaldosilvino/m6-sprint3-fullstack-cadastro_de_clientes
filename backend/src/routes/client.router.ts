import { Router } from "express";
import listClientsController from "../controllers/listClients.controller";
import createClientController from "../controllers/createClient.controller";
import deleteClientController from "../controllers/deleteClient.controller";
import updateClientController from "../controllers/updateClient.controller";
import findByIdClientController from "../controllers/findByClient.controller";

const routes = Router()

routes.post("",createClientController);
routes.get("",listClientsController);
routes.get("/:id",findByIdClientController);
routes.patch("/:id",updateClientController)
routes.delete("/:id",deleteClientController)

export default routes;
