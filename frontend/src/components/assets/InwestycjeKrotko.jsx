import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/Inwestycje_krotkoterminowe';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const InwestycjeKrotko = () => {
  const [Inwestycje_krotkoterminowe, setInwestycje_krotkoterminowe] = useState([]);
    useEffect(() => {
        getInwestycje_krotkoterminowe();
    }, [])

    const getInwestycje_krotkoterminowe = async () =>{
        const response = await listaA1();
        console.log(response);
        setInwestycje_krotkoterminowe(response.data);
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
        Inwestycje_krotkoterminowe.map((data) => (
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


export default InwestycjeKrotko