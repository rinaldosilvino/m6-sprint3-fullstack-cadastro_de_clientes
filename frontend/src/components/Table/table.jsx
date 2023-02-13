import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import { StyledTableContainer } from "./styled";

export default function BasicTable(props) {
  const [selected, setSelected] = React.useState([]);
  const isSelected = (nome) => selected.indexOf(nome) !== -1;
  const handleClick = (event, nome) => {
    const selectedIndex = selected.indexOf(nome);
    let newSelected = [];
    if (selectedIndex === -1 && selected.length === 0) {
      newSelected = newSelected.concat(selected, nome);
      props.selected({checked:true,name:nome,type:props.type});
    } else if (selectedIndex === 0 && selected[0] === nome) {
      newSelected = newSelected.concat(selected.slice(1));
      props.selected({checked:false,name:null,type:props.type});
    }else if(selected[0] !== nome){
      return;
    }else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const handleCheck = (data, nome) => {
    if (data.target.value === nome) {
      if (!selected) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    }
  };
  return (
    <StyledTableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Telefone</TableCell>
            <TableCell align="center">Data de Registro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => {
            const isItemSelected = isSelected(row.nome);
            return (
              <TableRow
                key={index.toString()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={(event) => handleClick(event, row.nome)}
                role="checkbox"
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    key={row.nome}
                    value={row.nome}
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": row.nome,
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {props.type === "Client" ? row.client_id : row.contact_id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.nome}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.telefone}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
