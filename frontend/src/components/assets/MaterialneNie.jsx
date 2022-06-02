import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/wartosci_niematerialne_i_prawne';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
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
    <Table >
    <TableHead>
        <TableRow >
            <TableCell>Nazwa</TableCell>
            <TableCell>Kwota</TableCell>
            
            <TableCell>
                            <Button variant="contained" color="primary" style={{margin: '0px 20px'}} component={Link} to={`/dodajPacjenta`}>Dodaj</Button>
                        </TableCell>
            <TableCell></TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
    {
        wartosci_niematerialne_i_prawne.map((data) => (
            <TableRow>
                <TableCell>{data.nazwa_przelewu}</TableCell>
                <TableCell>{data.kwota}</TableCell>
                
                
            </TableRow>
        ))
    }
    </TableBody>
</Table>
  )
}


export default MaterialneNie