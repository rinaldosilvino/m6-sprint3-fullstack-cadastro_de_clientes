import styled from "styled-components";


export const ButtonStyle = styled.button`
    width: 95%;
    height: 39px;
    background-color:  #1976d2;
    border: 1px solid  #1976d2;
    border-radius: 4px;
    color: #FFFFFF;
    font-size: 13px;
    margin: 10px;
    
    text-align: center;
    font-weight: 500;
        :hover {
        border: 1px solid #FFFF;
        background-color: #CED4DA;
        color: #FFFFFF;
        cursor: pointer;
        }

    @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
    
`;