import * as React from "react";
import { DivMain, StyledDivForm, StyledTitle } from "./styled";
import { useForm } from "react-hook-form";
import RcInput from "../../../components/Input";
import RcButton from "../../../components/Buttons";
import custom_http from "../../../services/custom_http";
import CircularIndeterminate from "../../../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";

export default function RegisterClient(props) {
  const [date,setDate] = React.useState(new Date(Date.now()).toLocaleDateString("fr-CA"))
  const [loading,setLoading]= React.useState(false)
  const navigate = useNavigate()
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

 async function onSubmit(data) {
    setLoading(true)
    const body = {
      "nome":data.name,
      "email":data.email,
      "telefone":data.phone,
    }
    const response = await custom_http.post("/clients",body)

    setLoading(false)
    navigate("/")
    return;
  };

  const goBack =  () => {
    navigate("/")
  }
  
   return !loading ? (
          <DivMain>
          <StyledTitle variant="h6">
             Cadastro de cliente
          </StyledTitle>
          <StyledDivForm>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RcInput
                register={register}
                title="Nome"
                id="name"
                name="name"
                type="text"
              />
              <RcInput
                title="Email"
                register={register}
                id="email"
                name="email"
                type="text"
              />
              <RcInput
                title="Telefone"
                register={register}
                id="phone"
                name="phone"
                type="text"
              />
              <RcInput
                title="Data de registro"
                register={register}
                id="date"
                name="date"
                type="date"
                defaultValue={date}
                disabled={true}
              />
              <RcButton type="submit">Cadastrar</RcButton>
              <RcButton onClick={goBack}>Voltar</RcButton>
            </form>
            
          </StyledDivForm>
        </DivMain>
    ) :

    (
      <CircularIndeterminate/>
    )
    
  
}
