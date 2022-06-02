import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, renderMatches, Route, Routes} from 'react-router-dom';
import MaterialneNie from "./components/assets/MaterialneNie";
import { Component } from "react";
import ExportPdfComponent from "./components/exportPDF";

class App extends Component {
  render() {
  return (
   
     
    <Router>
     
    <Routes>
      <Route path="/" exact="exact" element={<ExportPdfComponent/>} />
      <Route path="/wartosci_niematerialne_i_prawne" exact="exact" element={<MaterialneNie/>} />
      

    </Routes>
  </Router>
        
      
   
  );
  }
}

export default App;
