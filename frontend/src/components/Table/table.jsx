import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

export default function BasicTable(props) {
  const [selected, setSelected] = React.useState([]);

  const isSelected = (name) => selected.indexOf(name) !== -1;
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1 && selected.length === 0) {
      newSelected = newSelected.concat(selected, name);
      props.selected({checked:true,name:name});
    } else if (selectedIndex === 0 && selected[0] === name) {
      newSelected = newSelected.concat(selected.slice(1));
      props.selected({checked:false,name:null});
    }else if(selected[0] !== name){
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
  const handleCheck = (data, name) => {
    if (data.target.value === name) {
      if (!selected) {
        setSelected(true);
      } else {
        setSelected(false);
      }
    }
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => {
            const isItemSelected = isSelected(row.name);
            return (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={(event) => handleClick(event, row.name)}
                role="checkbox"
                selected={isItemSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    key={row.name}
                    value={row.name}
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": row.name,
                    }}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.telefone}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
