import React, { Component } from "react";
import "./Table.css";
// import { DataGrid } from "@material-ui/data-grid";

class Table extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const info = await response.json();
    this.setState({ person: info.data[0], loading: false });
    console.log(info.data);
  }

  render() {
    // const columns = [
    //   { field: "avatar", headerName: "Avatar", width: 120 },
    //   { field: "id", headerName: "ID", width: 70 },
    //   { field: "firstName", headerName: "First name", width: 130 },
    //   { field: "lastName", headerName: "Last name", width: 130 },
    //   { field: "email", headerName: "Email", width: 130 },
    // ];

    // const rows = [];
    if (this.state.loading) {
      return console.log("Loading...");
    } else {
      return (
        //   <div style={{ height: 400, width: "100%" }}>
        //     <DataGrid
        //       rows={rows}
        //       columns={columns}
        //       pageSize={5}
        //       checkboxSelection
        //     />
        //   </div>
        console.log(this.state.data)
      );
    }
  }
}
export default Table;
