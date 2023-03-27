import { Typography } from "@mui/material";
import styled from "styled-components";

export const DivMain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border: 0.1rem solid rgba(49, 51, 63, 0.2);
  background: #ffff;
  border-radius: 0.25rem;

  @media (max-width: 768px) {
    height: 650px;
    display: flex;
    overflow: auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTitle = styled(Typography)`
  padding-bottom: 5px;
  display: flex;
  justify-content: center;
`;

export const StyledDivTable = styled.div`
  @media (max-width: 768px) {
    display: flex;
    overflow: auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
