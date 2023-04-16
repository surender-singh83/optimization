import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {searchAction} from '../store/actions';
import { useDispatch } from "react-redux";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = React.useState("");
  console.log(searchQuery)
  const dispatch = useDispatch()
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        onChange={(e) => {
          setSearchQuery(e.target.value);
          dispatch(searchAction(e.target.value))
        }}
        value={searchQuery}
        label="Outlined"
        variant="outlined"
      />
    </Box>
  );
}
