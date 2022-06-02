import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/Nalezne_wplaty_na_kapital_podstawowy';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const NalezneWplaty = () => {
  const [Nalezne_wplaty_na_kapital_podstawowy, setNalezne_wplaty_na_kapital_podstawowy] = useState([]);
    useEffect(() => {
        getNalezne_wplaty_na_kapital_podstawowy();
    }, [])

    const getNalezne_wplaty_na_kapital_podstawowy = async () =>{
        const response = await listaA1();
        console.log(response);
        setNalezne_wplaty_na_kapital_podstawowy(response.data);
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
        Nalezne_wplaty_na_kapital_podstawowy.map((data) => (
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


export default NalezneWplaty