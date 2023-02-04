import * as React from "react";
import { DivMain } from "./styled";
import { useForm } from "react-hook-form";
import RcInput from "../../components/Input";
import RcButton from "../../components/Buttons";
import { Typography } from "@mui/material";

export default function Register(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("Entrou");
  };

  return (
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
          />
          <RcButton title="Cadastrar" />
        </form>
      </div>
    </DivMain>
  );
}
