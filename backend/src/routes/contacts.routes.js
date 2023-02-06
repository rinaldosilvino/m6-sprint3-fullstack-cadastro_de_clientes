import { Router } from "express";
import { createContactController, getAllContactController,getByIdContactController,deleteContactController,updateContactController,ContactProfileController } from "../controllers/contacts.controller";


const contactRoutes = Router()


contactRoutes.post('/contacts',createContactController);
contactRoutes.get('/contacts',getAllContactController);
contactRoutes.get("/contacts/profile", ContactProfileController)
contactRoutes.get('/contacts/:id',getByIdContactController);
contactRoutes.delete('/contacts/:id', deleteContactController);
contactRoutes.patch('/contacts/:id', updateContactController);

export default contactRoutes;