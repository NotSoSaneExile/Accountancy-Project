import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/do_12_miesiecy';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const ADostawyU12m = () => {
  const [do_12_miesiecy, setdo_12_miesiecy] = useState([]);
    useEffect(() => {
        getdo_12_miesiecy();
    }, [])

    const getdo_12_miesiecy = async () =>{
        const response = await listaA1();
        console.log(response);
        setdo_12_miesiecy(response.data);
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
        do_12_miesiecy.map((data) => (
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


export default ADostawyU12m