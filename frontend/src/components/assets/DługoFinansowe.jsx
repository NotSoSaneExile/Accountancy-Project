import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/dlugoterminowe_aktywa_finansowe';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const DługoFinansowe = () => {
  const [dlugoterminowe_aktywa_finansowe, setdlugoterminowe_aktywa_finansowe] = useState([]);
    useEffect(() => {
        getdlugoterminowe_aktywa_finansowe();
    }, [])

    const getdlugoterminowe_aktywa_finansowe = async () =>{
        const response = await listaA1();
        console.log(response);
        setdlugoterminowe_aktywa_finansowe(response.data);
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
        dlugoterminowe_aktywa_finansowe.map((data) => (
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


export default DługoFinansowe