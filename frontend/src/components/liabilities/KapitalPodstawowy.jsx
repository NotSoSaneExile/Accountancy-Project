import React, {useState, useEffect} from 'react'
import { listaD1 } from '../../apiliabities/Kapital_podstawowy';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const KapitalPodstawowy = () => {
  const [Kapital_podstawowy, setKapital_podstawowy] = useState([]);
  useEffect(() => {
      getKapital_podstawowy();
  }, [])

  const getKapital_podstawowy = async () =>{
      const response = await listaD1();
      console.log(response);
      setKapital_podstawowy(response.data);
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
      Kapital_podstawowy.map((data) => (
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


export default KapitalPodstawowy