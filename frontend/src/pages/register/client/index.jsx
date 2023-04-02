import * as React from "react";
import { DivMain, StyledDivForm, StyledTitle } from "./styled";
import { useForm } from "react-hook-form";
import RcInput from "../../../components/Input";
import RcButton from "../../../components/Buttons";
import custom_http from "../../../services/custom_http";
import CircularIndeterminate from "../../../components/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RegisterClient(props) {
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

  async function handleRegister(data) {
    setLoading(true);
    const body = {
      nome: data.name,
      email: data.email,
      telefone: data.phone,
    };
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    const response = await custom_http.post("/clients", body);
    setLoading(false);
    navigate("/");
    return;
  }

  const goBack = () => {
    navigate("/");
  };

  return !loading ? (
    <DivMain>
      <StyledTitle variant="h6">Cadastro de Cliente</StyledTitle>
      <StyledDivForm>
        <form onSubmit={handleSubmit(handleRegister)}>
          <RcInput
            register={register}
            title="Nome"
            id="name_1"
            name="name"
            type="text"
            errors={errors}
          />
          <RcInput
            title="Email"
            register={register}
            id="email_1"
            name="email"
            type="text"
            errors={errors}
          />
          <RcInput
            title="Telefone"
            register={register}
            id="phone_1"
            name="phone"
            type="text"
            errors={errors}
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
  ) : (
    <CircularIndeterminate />
  );
}
