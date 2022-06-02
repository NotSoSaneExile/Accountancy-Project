import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/nieruchomosci';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Nieruchomosci = () => {
  const [nieruchomosci, setnieruchomosci] = useState([]);
    useEffect(() => {
        getnieruchomosci();
    }, [])

    const getnieruchomosci = async () =>{
        const response = await listaA1();
        console.log(response);
        setnieruchomosci(response.data);
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
        nieruchomosci.map((data) => (
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


export default Nieruchomosci