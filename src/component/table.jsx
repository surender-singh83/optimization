import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fethUsers } from "../services/fetchService";
import dummyImage from "../assets/img/2-image.jpg"

// Generate Order Data

function preventDefault(event) {
  event.preventDefault();
}

export default function TableComp({ url, filter }) {
  const [tableData, setTableData] = React.useState([]);
  const [tableColumn, setTableColumn] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  console.log("table", filter);
  React.useEffect(() => {
    fethUsers(url)
      .then((data) => {
        if (data) {
          console.log(data);
          setTableData(data);
          let tableCol = Object.entries(data[0]).reduce((acc, item) => {
            acc.push(item[0]);
            return acc;
          }, []);
          console.log(tableCol);
          setTableColumn(tableCol);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  React.useEffect(() => {
    const filtered = tableData.filter((item) => {
      return item.first_name.toLowerCase().includes(filter);
    });
    setFilteredData(filtered);
  }, [filter, tableData]);
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            {tableColumn.map((item, i) => (
              <TableCell
                key={`item${i}`}
                align={item === "avatar" ? "center" : "left"}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row) => (
            <TableRow key={row.email}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">
                <img width={128} height={128} src={row.avatar || dummyImage} alt={row.avatar} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
