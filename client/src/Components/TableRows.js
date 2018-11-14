import React, { Component } from "react";
import axios from "axios";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import RowButton from "./rowButton";

class TableRows extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.getFromDatabase();
  }

  getFromDatabase = () => {
    return axios
      .get("/api/getFromDatabase")
      .then(res => {
        this.setState({ results: this.state.results.concat(res.data) });
        console.log(this.state.results);
      })
      .catch(err => {
        console.log("error happened, printed below");
        return console.log("err", err);
      });
  };

  render() {
    const { results } = this.state;
    return results.map(item => {
      console.log("running map");
      return (
        <TableRow key={item.id}>
          <TableCell numeric component="th" scope="row">
            {item.DataAdded}
          </TableCell>
          <TableCell>{item.OwnerName}</TableCell>
          <TableCell>{item.OwnerNumber}</TableCell>
          <TableCell>{item.DeviceName}</TableCell>
          <TableCell>{item.Issue}</TableCell>
          <TableCell>{item.RepairStatus}</TableCell>
          <RowButton id={item.id} />
        </TableRow>
      );
    });
  }
}

export default TableRows;
