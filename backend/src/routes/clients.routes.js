import { Router } from "express";
import { createclientController,deleteclientController,getAllclientController,getByIdclientController, updateclientController,clientProfileController } from "../controllers/clients.controller";


const clientRoutes = Router()


clientRoutes.post('/clients',createclientController);
clientRoutes.get('/clients',getAllclientController);
clientRoutes.get("/clients/profile",  clientProfileController)
clientRoutes.get('/clients/:id',getByIdclientController);
clientRoutes.delete('/clients/:id', deleteclientController);
clientRoutes.patch('/clients/:id', updateclientController);

export default clientRoutes;