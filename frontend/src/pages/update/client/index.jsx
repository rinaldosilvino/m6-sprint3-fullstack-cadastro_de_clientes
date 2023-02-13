import * as React from "react";
import { DivMain, StyledDivForm } from "./styled";
import { useForm } from "react-hook-form";
import RcInput from "../../../components/Input";
import RcButton from "../../../components/Buttons";
import { Typography } from "@mui/material";
import custom_http from "../../../services/custom_http";
import CircularIndeterminate from "../../../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateClient(props) {
  const [loading,setLoading]= React.useState(false)
  const [client, setClient] = React.useState({
    client_id:"",
    nome:"",
    email:"",
    telefone:"",
    data_de_registro:""
  })
  const navigate = useNavigate()
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

 async function onSubmit(data) {
    setLoading(true) 
    const id = location.state.client_id;

    const body = {
      "nome":data.nome,
      "email":data.email,
      "telefone":data.telefone
    }
    const response = await custom_http.patch(`/clients/${id}}`,body)
    setLoading(false)
    navigate("/")
    return;
  };

  const goBack =  () => {
    navigate("/")
  }
  React.useEffect(() => {
    if(location.state){
      debugger
      const {client_id,nome,email,telefone,data_de_registro} = location.state
      setClient({client_id:client_id,name:nome,email:email,phone:telefone,date:data_de_registro})
    }else{
      navigate("/")
    }
  },[]);
  
   return !loading && client.client_id ? (
          <DivMain>
          <Typography variant="h6">
             Alterar de cliente
          </Typography>
          <StyledDivForm>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RcInput
                register={register}
                title="Nome"
                id="name"
                name="nome"
                type="text"
                defaultValue={client.name}
              />
              <RcInput
                title="Email"
                register={register}
                id="email"
                name="email"
                type="text"
                defaultValue={client.email}
              />
              <RcInput
                title="Telefone"
                register={register}
                id="phone"
                name="telefone"
                type="text"
                defaultValue={client.phone}
              />
              <RcInput
                title="Data de Registro"
                register={register}
                id="date"
                name="data_de_resgistro"
                type="text"
                defaultValue={client.date}
                disabled={true}
              />
              <RcButton type="submit">Alterar</RcButton>
              <RcButton onClick={goBack}>Voltar</RcButton>
            </form>
          </StyledDivForm>
        </DivMain>
    ) :

    (
      <CircularIndeterminate/>
    )
    
  
}
