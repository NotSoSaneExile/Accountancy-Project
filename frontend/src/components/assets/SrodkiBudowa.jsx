import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/Srodki_trwale_w_budowie';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const SrodkiBudowa = () => {
  const [Srodki_trwale_w_budowie, setSrodki_trwale_w_budowie] = useState([]);
    useEffect(() => {
        getSrodki_trwale_w_budowie();
    }, [])

    const getSrodki_trwale_w_budowie = async () =>{
        const response = await listaA1();
        console.log(response);
        setSrodki_trwale_w_budowie(response.data);
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
        Srodki_trwale_w_budowie.map((data) => (
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


export default SrodkiBudowa