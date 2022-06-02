import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/krotkoterminowe_aktywa_finansowe';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const KrotkoFinansowe = () => {
  const [krotkoterminowe_aktywa_finansowe, setkrotkoterminowe_aktywa_finansowe] = useState([]);
    useEffect(() => {
        getkrotkoterminowe_aktywa_finansowe();
    }, [])

    const getkrotkoterminowe_aktywa_finansowe = async () =>{
        const response = await listaA1();
        console.log(response);
        setkrotkoterminowe_aktywa_finansowe(response.data);
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
        krotkoterminowe_aktywa_finansowe.map((data) => (
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


export default KrotkoFinansowe