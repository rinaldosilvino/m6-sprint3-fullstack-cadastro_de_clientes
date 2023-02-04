import * as React from "react";
import { DivMain } from "./styled";
import { useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import BasicTable from "../../components/Table/table";

export default function Controller() {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log("Entrou");
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <DivMain>
      <TabContext value={value}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
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
            <Button onClick={() => navigate("/RegisterContact")}>
              Cadastrar contato
            </Button>
          </div>
          <div>
            <BasicTable />
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            <Typography variant="body2">Lista de contatos</Typography>
          </div>
          <div>
            <BasicTable />
          </div>
        </TabPanel>
      </TabContext>
    </DivMain>
  );
}
