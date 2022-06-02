import React from "react";
//import Home from "./components/Home";
import {Component} from "react";
import ExportPdfComponent from "./components/exportPDF";

class App extends Component {

  render() {
    return (
      <div>
        <ExportPdfComponent/>
      </div>
    );
  }
}

export default App;
