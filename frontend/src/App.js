import React from "react";
//import Header from "./components/Header";
import Home from "./components/Home";
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");

function App() {
  return (
   <>
   {/* <Header/> */}
   <Home/>
   </>
  );
}

export default App;
