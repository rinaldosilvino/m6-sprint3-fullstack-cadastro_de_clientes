import { Input, Typography } from "@mui/material";
import { useState } from "react";
import { StyledField, StyledLabel, StyledTitle } from "./styled";

const RcInput = ({
  defaultValue,
  title,
  type,
  name,
  id,
  register,
  disabled,
  errors,
}) => {
  const [message, setMessage] = useState("");
  const [typeInput, setTypeInput] = useState(type);

  return (
    <StyledField>
      <StyledTitle variant="subtitle2">{title}</StyledTitle>
      <Input
        {...register(name)}
        id={id}
        name={name}
        type={typeInput}
        defaultValue={defaultValue}
        disabled={disabled}
      ></Input>
      {errors && <span>{errors.name?.message}</span>}
    </StyledField>
  );
};

export default RcInput;
