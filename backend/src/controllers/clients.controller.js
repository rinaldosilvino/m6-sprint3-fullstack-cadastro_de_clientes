import { response } from "express";
import clients from "../database";
import createclientService from "../services/createClient.service";
import deleteclientService from "../services/deleteClient.service";
import listclientService from "../services/listClient.service";
import updateclientService from "../services/updateClient.service";
import listclientProfileService from "../services/listClientProfile.service";

const createclientController = async (request, response) => {
    const client = request.body
    const message_empty = _validateBodyEmpty(client)
    if(message_empty){
        return response.status(404).json({message:message_empty})
    }
    const newclient = await createclientService(client)
    return response.status(201).json(newclient)
}

const getAllclientController = (request, response) =>{
    return response.status(200).json(clients)
}

const deleteclientController = (request, response) => {
    const id = request.params.id
    const result = deleteclientService(id)
    return response.status(201).json({message:result})
}

const updateclientController = (request, response) => {
    const {id} = request.params
    const client = request.body
    const updateclient =  updateclientService(id,client)
    return response.status(201).json(updateclient)
}

const getByIdclientController = (request, response) =>{
    const id = request.params.id
    const message  = _validateId(id)
    if(message){
        return response.status(404).json({message:message})
    }
    const client = listclientService(id)
    return response.status(200).json(client)
}

function _validateBodyEmpty(client){
    if(!client.email){
        return "Email is not found"
    }else if(!client.name){
        return "Name is not found"
    }else if(!client.password){
        return "Password is not found"
    }else if(typeof client.isAdm === Boolean){
        return "isAdm is not found"
    }
    return ""
}
const clientProfileController = (request, response) => {
    const { id } = request.client;
    const profile = listclientProfileService(id)
    return response.json(profile);
  };

export {createclientController,getAllclientController,getByIdclientController,deleteclientController,updateclientController,clientProfileController}
