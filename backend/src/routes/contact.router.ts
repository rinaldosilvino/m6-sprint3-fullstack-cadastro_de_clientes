import { Router } from "express";
import createContactController from "../controllers/contact/createContact.controller";
import deleteContactController from "../controllers/contact/deleteContact.controller";
import findByIdContactController from "../controllers/contact/findByContact.controller";
import findByIdContactClientController from "../controllers/contact/findByContactClient.controller";
import listContactsController from "../controllers/contact/listContact.controller";
import updateContactController from "../controllers/contact/updateContact.controller";


const contactsRouter = Router()

contactsRouter.post("",createContactController);
contactsRouter.get("",listContactsController);
contactsRouter.get("/:id",findByIdContactController);
contactsRouter.get("/clients/:id",findByIdContactClientController);
contactsRouter.patch("",updateContactController)
contactsRouter.delete("/:id",deleteContactController)

export default contactsRouter;
