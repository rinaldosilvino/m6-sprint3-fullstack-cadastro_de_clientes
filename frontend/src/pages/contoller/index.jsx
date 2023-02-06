import React, { useState, useEffect } from 'react';
import { DivMain } from "./styled";
import { Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../components/Table/table";
import custom_http from '../../services/custom_http';


export default function Controller() {
  const [value, setValue] = useState("1");
  const navigate = useNavigate();
  const [listClient,setListClient] = useState([])
  const [isSelected,setIsSelected] = useState()
  const [nameSelected,setNameSelected] = useState()
  const [idSelected,setIdSelected] = useState()
  const [page, setPage] = useState("CONTROLLER")

  const handleSelected = (data) =>{
    setIsSelected(data.checked)
    setNameSelected(data.name)
    if(data.checked){
      const client = listClient.find(element => element.name === data.name)
      setIdSelected(client.id)
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getClients = async () =>{
    const { data } = await custom_http.get("/clientes");
    setListClient(data) 
  }
  const deleteClient = () =>{
    const client = listClient.find(element => element.name === nameSelected)
    custom_http.delete(`/clients/${client.id}`);
    getClients()
  }

  useEffect(() => {
    if(listClient?.length === 0){
      getClients()
    }
  },[listClient]);
  return (
    <DivMain>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Clientes" value="1" />
          <Tab label="Contatos" value="2" />
        </TabList>
        <TabPanel value="1">
          <div>
            <Typography variant="body2">Lista de clientes</Typography>
          </div>
          <div>
            <Button onClick={() => navigate("/RegisterClient")}>
              Cadastrar clientes
            </Button>
            <Button disabled={!isSelected} onClick={() => navigate("/RegisterContact",{state:{
              cliend_id:idSelected
            }})}>
              Cadastrar contato
            </Button>
            <Button disabled={!isSelected} onClick={deleteClient}>
              Deletar
            </Button>
          </div>
          <div>
            <BasicTable selected={handleSelected} data={listClient} />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <Typography variant="body2">Lista de contatos</Typography>
          </div>
          <div>
            <BasicTable selected={handleSelected} data={listClient}/>
          </div>
        </TabPanel>
      </TabContext>
    </DivMain>
  );
}
