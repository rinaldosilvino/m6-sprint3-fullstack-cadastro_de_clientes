import * as React from "react";
import { DivMain, StyledDivForm } from "./styled";
import { useForm } from "react-hook-form";
import RcInput from "../../../components/Input";
import RcButton from "../../../components/Buttons";
import { Typography } from "@mui/material";
import custom_http from "../../../services/custom_http";
import CircularIndeterminate from "../../../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RegisterContact(props) {
  const [date, setDate] = React.useState(
    new Date(Date.now()).toLocaleDateString("fr-CA")
  );

  const schema = yup.object().shape({
    name: yup.string().required("Campo precisa ser preenchido"),
    email: yup.string().required("Campo precisa ser preenchido"),
    phone: yup.string().required("Campo precisa ser preenchido"),
  });

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setLoading(true);
    const id = location.state.client_id;
    const body = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
      client_id: location.state.client_id,
    };
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const response = await custom_http.post("/contacts", body);
    setLoading(false);
    navigate("/");
    return;
  }

  const goBack = () => {
    navigate("/");
  };

  return !loading ? (
    <DivMain>
      <Typography variant="h6">Cadastro de Contato</Typography>
      <StyledDivForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RcInput
            register={register}
            title="Nome"
            id="name"
            name="nome"
            type="text"
            errors={errors}
          />
          <RcInput
            title="Email"
            register={register}
            id="email"
            name="email"
            type="text"
            errors={errors}
          />
          <RcInput
            title="Telefone"
            register={register}
            id="phone"
            name="telefone"
            type="text"
            errors={errors}
          />
          <RcInput
            title="Data de Registro"
            register={register}
            id="date"
            name="data_de_registro"
            type="date"
            defaultValue={date}
            disabled={true}
          />
          <RcButton type="submit">Cadastrar</RcButton>
          <RcButton onClick={goBack}>Voltar</RcButton>
        </form>
      </StyledDivForm>
    </DivMain>
  ) : (
    <CircularIndeterminate />
  );
}
