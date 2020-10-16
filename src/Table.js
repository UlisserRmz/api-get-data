import React, { Component } from "react";
import "./Table.css";
import { DataGrid } from "@material-ui/data-grid";

class Table extends Component {
  state = {
    loading: true,
    person: [],
  };

  async componentDidMount() {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const info = await response.json();
    this.setState({ person: info.data, loading: false });

    console.log(info.data);
    console.log(info.data[0]["id"]);
    console.log(info.data[0]["email"]);
  }

  render() {
    const columns = [
      { field: "avatar", headerName: "Avatar", width: 120 },
      { field: "id", headerName: "ID", width: 70 },
      { field: "first_name", headerName: "First name", width: 130 },
      { field: "last_name", headerName: "Last name", width: 130 },
      { field: "email", headerName: "Email", width: 130 },
    ];

    const rows = this.state.person;
    return (
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </div>
    );
  }
}

export default Table;
