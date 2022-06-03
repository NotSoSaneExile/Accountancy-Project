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
      <Route path="/dostawy_powyzej_12msc" exact="exact" element={<ADostawyO12M/>} />
      <Route path="/dostawy_ponizej_12msc" exact="exact" element={<ADostawyU12M/>} />
      <Route path="/aktywa" exact="exact" element={<Aktywa/>} />
      <Route path="/aktywa_obrotowe" exact="exact" element={<AktywaObrotowe/>} />
      <Route path="/daf" exact="exact" element={<DługoFinansowe/>} />
      <Route path="/dro" exact="exact" element={<DługoMiedzyokresowe/>} />
      <Route path="/dostawy_uslugi" exact="exact" element={<DostawyUslugiA/>} />
      <Route path="/Inwestycje_dlugoterminowe" exact="exact" element={<InwestycjeDlugo/>} />
      <Route path="/Inwestycje_krotkoterminowe" exact="exact" element={<InwestycjeKrotko/>} />
      <Route path="/KrotkoFinansowe" exact="exact" element={<KrotkoFinansowe/>} />
      <Route path="/krotkomiedzyokresowe" exact="exact" element={<KrotkoMiedzyokresowe/>} />
      <Route path="/NalezneWplaty" exact="exact" element={<NalezneWplaty/>} />
      <Route path="/NalDlug" exact="exact" element={<NaleznosciDlugo/>} />
      <Route path="/NalKrotk" exact="exact" element={<NaleznosciKrotko/>} />
      <Route path="/nieruchomosci" exact="exact" element={<Nieruchomosci/>} />
      <Route path="/rzeczowe_aktywa" exact="exact" element={<RzeczoweAktywa/>} />
      <Route path="/srodki" exact="exact" element={<Srodki/>} />
      <Route path="/srodki_budowa" exact="exact" element={<SrodkiBudowa/>} />
      <Route path="/srodki_kasa" exact="exact" element={<SrodkiKasa/>} />
      <Route path="/aktywa_trwale" exact="exact" element={<Trwale/>} />
      <Route path="/udzialy_wlasne" exact="exact" element={<UdzialyWlasne/>} />
      <Route path="/zapasy" exact="exact" element={<Zapasy/>} />
      

    </Routes>
  </Router>
        
      
   
  );
  }
}

export default App;
