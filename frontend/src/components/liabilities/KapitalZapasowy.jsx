import React, {useState, useEffect} from 'react'
import { listaD2 } from '../../apiliabities/Kapital_zapasowy';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const KapitalZapasowy = () => {
  const [Kapital_zapasowy, setKapital_zapasowy] = useState([]);
  useEffect(() => {
      getKapital_zapasowy();
  }, [])

  const getKapital_zapasowy = async () =>{
      const response = await listaD2();
      console.log(response);
      setKapital_zapasowy(response.data);
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
      Kapital_zapasowy.map((data) => (
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


export default KapitalZapasowy