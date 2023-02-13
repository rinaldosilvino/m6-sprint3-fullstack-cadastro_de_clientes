import { Typography } from "@mui/material";
import styled from "styled-components";

export const DivMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledTitle = styled(Typography)`
  padding-bottom: 5px;

`

export const StyledDivForm = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 0.25rem;
  border: 0.1rem solid rgba(49,51,63,0.2);
  gap:1rem;
  width:300px;
`