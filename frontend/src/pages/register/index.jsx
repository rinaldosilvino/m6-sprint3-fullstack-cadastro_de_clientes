import * as React from "react";
import { DivMain } from "./styled";
import { useForm } from "react-hook-form";
import RcInput from "../../components/Input";
import RcButton from "../../components/Buttons";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import custom_http from "../../services/custom_http";
import CircularIndeterminate from "../../components/Loading";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Register(props) {
  const [date,setDate] = React.useState(new Date(Date.now()).toLocaleDateString("fr-CA"))
  const [back,setBack] = React.useState(false)
  const [loading,setLoading]= React.useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

 async function onSubmit(data) {
    setLoading(true)
    debugger;
    const id = location.state.client_id;
    if(props.type === "CL"){
        const body = {
          "name":data.name,
          "email":data.email,
          "phone":data.telefone,
          "date":data.date
        }
    
        const response = await custom_http.post("/clients",body)
    }else{
      const body = {
        "name":data.name,
        "email":data.email,
        "phone":data.telefone,
        "date":data.date,
        "client_id":location.state.client_id
      }
  
      const response = await custom_http.post("/contacts",body)
    }

    setLoading(false)
    return;
  };
  
  const goBack = () =>{
    navigate("/")
  }
   return !loading ? (
          <DivMain>
          <Typography variant="subtitle1">
            {props.type === "CL" ? "Cadastro de cliente" : "Cadastro de contato"}
          </Typography>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RcInput
                register={register}
                title="name"
                id="name"
                name="name"
                type="text"
              />
              <RcInput
                title="email"
                register={register}
                id="email"
                name="email"
                type="text"
              />
              <RcInput
                title="phone"
                register={register}
                id="phone"
                name="phone"
                type="text"
              />
              <RcInput
                title="date"
                register={register}
                id="date"
                name="date"
                type="date"
                defaultValue={date}
                disabled={true}
              />
              <RcButton title="Cadastrar" />
            </form>
            <RcButton onClick={goBack} title="Voltar" />
          </div>
        </DivMain>
    ) :

    (
      <CircularIndeterminate/>
    )
    
  
}
