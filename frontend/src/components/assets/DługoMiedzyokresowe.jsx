import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/Dlugoterminowe_rozliczenia_okresowe';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const DługoMiedzyokresowe = () => {
  const [Dlugoterminowe_rozliczenia_okresowe, setDlugoterminowe_rozliczenia_okresowe] = useState([]);
    useEffect(() => {
        getDlugoterminowe_rozliczenia_okresowe();
    }, [])

    const getDlugoterminowe_rozliczenia_okresowe = async () =>{
        const response = await listaA1();
        console.log(response);
        setDlugoterminowe_rozliczenia_okresowe(response.data);
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
        Dlugoterminowe_rozliczenia_okresowe.map((data) => (
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


export default DługoMiedzyokresowe