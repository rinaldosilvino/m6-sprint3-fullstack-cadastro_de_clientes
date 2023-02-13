import { Input, Typography } from "@mui/material";
import { useState } from "react";
import { StyledField, StyledLabel, StyledTitle } from "./styled";

const RcInput = ({defaultValue, title, type, name, id, register,disabled }) => {
  const [typeInput, setTypeInput] = useState(type);
  return (
    <StyledField>
      <StyledTitle variant="subtitle2">{title}</StyledTitle>
      <Input
        {...register(name || null)}
        id={id}
        name={name}
        type={typeInput}
        defaultValue={defaultValue}
        disabled={disabled}
      ></Input>
    </StyledField>
  );
};

export default RcInput;
