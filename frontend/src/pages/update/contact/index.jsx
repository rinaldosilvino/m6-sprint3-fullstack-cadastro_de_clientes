import * as React from "react";
import { DivMain, StyledDivForm } from "./styled";
import { useForm } from "react-hook-form";
import RcInput from "../../../components/Input";
import RcButton from "../../../components/Buttons";
import { Typography } from "@mui/material";
import custom_http from "../../../services/custom_http";
import CircularIndeterminate from "../../../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateContact(props) {
  const [loading,setLoading]= React.useState(false)
  const [contact, setContact] = React.useState({
    contact_id:"",
    name:"",
    email:"",
    phone:"",
    date:""
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
    const id = parseInt(location.state.contact_id);

    const body = {
      "nome":data.nome,
      "email":data.email,
      "telefone":data.telefone,
    }
    const response = await custom_http.patch(`/contacts/${id}`,body)
    setLoading(false)
    navigate("/")
    return;
  };

  const goBack =  () => {
    navigate("/")
  }
  React.useEffect(() => {
    if(location.state){
      
      const {contact_id,nome,email,telefone,data_de_registro,client_id} = location.state
      setContact({contact_id:contact_id,name:nome,email:email,phone:telefone,date:data_de_registro,client_id:client_id})
    }else{
      navigate("/")
    }
  },[]);
  
   return !loading && contact.contact_id ? (
          <DivMain>
          <Typography variant="h6">
             Alterar de contato
          </Typography>
          <StyledDivForm>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RcInput
                register={register}
                title="Nome"
                id="name"
                name="nome"
                type="text"
                defaultValue={contact.name}
              />
              <RcInput
                title="Email"
                register={register}
                id="email"
                name="email"
                type="text"
                defaultValue={contact.email}
              />
              <RcInput
                title="Telefone"
                register={register}
                id="phone"
                name="telefone"
                type="text"
                defaultValue={contact.phone}
              />
              <RcInput
                title="Data de Resgitro"
                register={register}
                id="date"
                name="data_de_registro"
                type="text"
                defaultValue={contact.date}
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
