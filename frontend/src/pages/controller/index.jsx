import React, { useState, useEffect } from "react";
import { DivMain, StyledTitle, StyledDivTable } from "./styled";
import { Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import BasicTable from "../../components/Table/table";
import custom_http from "../../services/custom_http";

export default function Controller() {
  const [value, setValue] = useState("1");
  const navigate = useNavigate();
  const [listClient, setListClient] = useState([]);
  const [listContact, setListContact] = useState([]);
  const [isSelected, setIsSelected] = useState();
  const [nameSelected, setNameSelected] = useState();
  const [idSelected, setIdSelected] = useState();

  const handleSelected = (data) => {
    if (data.type === "Client") {
      setIsSelected(data.checked);
      setNameSelected(data.name);
      if (data.checked) {
        const client = listClient.find((element) => element.name === data.nome);
        setIdSelected(client.client_id);
      }
    } else if (data.type === "Contact") {
      setIsSelected(data.checked);
      setNameSelected(data.name);
      if (data.checked) {
        const contact = listContact.find(
          (element) => element.name === data.nome
        );
        setIdSelected(contact.contact_id);
      }
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const loadLists = async () => {
    const response_client = await custom_http.get("/clients");
    const response_contact = await custom_http.get("/contacts");
    setListClient(response_client.data);
    setListContact(response_contact.data);
  };

  const deleteClient = async () => {
    if (nameSelected) {
      const client = listClient.find(
        (element) => element.nome === nameSelected
      );
      const response = await custom_http.delete(`/clients/${client.client_id}`);
      if (response.status === 204) {
        loadLists();
      }
    }
  };

  const deleteContact = async () => {
    if (nameSelected) {
      const contacts = listContact.find(
        (element) => element.nome === nameSelected
      );
      const response = await custom_http.delete(
        `/contacts/${contacts.contact_id}`
      );
      if (response.status === 204) {
        loadLists();
      }
    }
  };

  const acessPageUpdate = (type) => {
    if (type === "Client") {
      const client = listClient.find(
        (element) => element.nome === nameSelected
      );
      navigate("/UpdateClient", { state: client });
    } else {
      const contact = listContact.find(
        (element) => element.nome === nameSelected
      );
      navigate("/UpdateContact", { state: contact });
    }
  };

  const acessPageRegisterContact = () => {
    const client = listClient.find((element) => element.nome === nameSelected);
    navigate("/RegisterContact", { state: client });
  };

  useEffect(() => {
    if (listClient?.length === 0) {
      loadLists();
    }
  }, [listClient]);
  return (
    <DivMain>
      <StyledTitle>
        <Typography variant="h6">Controle de Clientes</Typography>
      </StyledTitle>
      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Clientes" value="1" />
          <Tab label="Contatos" value="2" />
        </TabList>
        <TabPanel value="1">
          <StyledDivTable>
            <Button onClick={() => navigate("/RegisterClient")}>
              Cadastrar clientes
            </Button>
            <Button
              disabled={!isSelected}
              onClick={() => acessPageRegisterContact()}
            >
              Cadastrar contato
            </Button>
            <Button disabled={!isSelected} onClick={() => deleteClient()}>
              Deletar
            </Button>
            <Button
              disabled={!isSelected}
              onClick={() => acessPageUpdate("Client")}
            >
              Alterar
            </Button>
          </StyledDivTable>
          <div>
            <BasicTable
              type={"Client"}
              selected={handleSelected}
              data={listClient}
            />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <Button disabled={!isSelected} onClick={() => deleteContact()}>
              Deletar
            </Button>
            <Button
              disabled={!isSelected}
              onClick={() => acessPageUpdate("Contact")}
            >
              Alterar
            </Button>
          </div>
          <StyledDivTable>
            <BasicTable
              type={"Contact"}
              selected={handleSelected}
              data={listContact}
            />
          </StyledDivTable>
        </TabPanel>
      </TabContext>
    </DivMain>
  );
}
