import "./App.css";
import React from "react";
import Form from "./form";
import Table from "./table";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-row justify-content-around ">
      <div className="col-5 ">
        <Form></Form>
      </div>
      <div className="col-12 ">
        <Table></Table>
      </div>
    </div>
  );
}

export default App;
