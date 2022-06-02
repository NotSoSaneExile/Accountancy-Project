import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/z_tutulu_dostaw_uslug';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const DostawyUslugiA = () => {
  const [z_tutulu_dostaw_uslug, setz_tutulu_dostaw_uslug] = useState([]);
    useEffect(() => {
        getz_tutulu_dostaw_uslug();
    }, [])

    const getz_tutulu_dostaw_uslug = async () =>{
        const response = await listaA1();
        console.log(response);
        setz_tutulu_dostaw_uslug(response.data);
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
        z_tutulu_dostaw_uslug.map((data) => (
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


export default DostawyUslugiA