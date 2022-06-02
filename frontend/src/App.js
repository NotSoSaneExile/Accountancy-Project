import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ExportPdfComponent from "./components/exportPDF";
import { Component } from "react";


class App extends Component {
  render() {
  return (
   <div>
    <Router>
     
    <Routes>
      <Route path="/" exact="exact" element={<ExportPdfComponent/>} />
      

    </Routes>
  </Router>
        
      
  </div>
    );
  }
}

export default App;
