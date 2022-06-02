import React from 'react';
import ReactToPrint from 'react-to-print';
import Home from './Home';
 
class ExportPdfComponent extends React.Component {
     
    render() {
      return (
        <div>
          <Home ref={(response) => (this.componentRef = response)} />
          
          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Drukuj/Generuj PDF!</button>}
          />
        </div>
      );
    }
}
 
export default ExportPdfComponent;