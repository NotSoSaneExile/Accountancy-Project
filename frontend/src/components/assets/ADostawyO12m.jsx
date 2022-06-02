import React, {useState, useEffect} from 'react'
import { listaA1 } from '../../apiassets/powyzej_12_miesiecy';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const ADostawyO12m = () => {
  const [powyzej_12_miesiecy, setpowyzej_12_miesiecy] = useState([]);
    useEffect(() => {
        getpowyzej_12_miesiecy();
    }, [])

    const getpowyzej_12_miesiecy = async () =>{
        const response = await listaA1();
        console.log(response);
        setpowyzej_12_miesiecy(response.data);
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
        powyzej_12_miesiecy.map((data) => (
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


export default ADostawyO12m