import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ExportPdfComponent from "./components/exportPDF";
import { Component } from "react";


// Default export is a4 paper, portrait, using millimeters for units
//const doc = new jsPDF();

//doc.text("Hello world!", 10, 10);
//doc.save("a4.pdf");

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
