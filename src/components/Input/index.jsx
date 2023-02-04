import { Input } from "@mui/material";
import { useState } from "react";
import { StyledField, StyledLabel } from "./styled";

const RcInput = ({ title, type, name, id, register }) => {
  const [typeInput, setTypeInput] = useState(type);
  return (
    <StyledField>
      <StyledLabel>{title}</StyledLabel>
      <Input
        {...register(name || null)}
        id={id}
        name={name}
        type={typeInput}
      ></Input>
    </StyledField>
  );
};

export default RcInput;
