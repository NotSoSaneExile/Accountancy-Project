import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { jsPDF } from "jspdf";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MaterialneNie from "./components/assets/MaterialneNie";


// Default export is a4 paper, portrait, using millimeters for units
//const doc = new jsPDF();

//doc.text("Hello world!", 10, 10);
//doc.save("a4.pdf");

function App() {
  return (
   
     
    <Router>
     
    <Routes>
      <Route path="/" exact="exact" element={<Home/>} />
      <Route path="/wartosci_niematerialne_i_prawne" exact="exact" element={<MaterialneNie/>} />
      

    </Routes>
  </Router>
        
      
   
  );
}

export default App;
