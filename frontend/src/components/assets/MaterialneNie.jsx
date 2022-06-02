import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/wartosci_niematerialne_i_prawne';

const MaterialneNie = () => {
  const [wartosci_niematerialne_i_prawne, setWartosci_niematerialne_i_prawne] = useState([]);
    useEffect(() => {
        getwartosci_niematerialne_i_prawne();
    }, [])

    const getwartosci_niematerialne_i_prawne = async () =>{
        const response = await listaA1();
        console.log(response);
        setWartosci_niematerialne_i_prawne(response.data);
    }
  return (
    <table >
    <th>
        <tr >
            <td>Nazwa operacji</td>
            <td>Kwota</td>
            
            <td>
                            <button >Dodaj</button>
                        </td>
            
        </tr>
    </th>
    <tbody>
    {
        wartosci_niematerialne_i_prawne.map((data) => (
            <tr>
                <td>{data.nazwa_przelewu}</td>
                <td>{data.kwota}</td>
                
               
            </tr>
        ))
    }
    </tbody>
</table>
  )
}

export default MaterialneNie