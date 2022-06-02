import React, {useState, useEffect} from 'react'
import { listaD33} from '../../apiliabities/nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow';
import { Table, TableCell, TableRow, TableHead, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Nadwyzka = () => {
  const [nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow, setnadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow] = useState([]);
  useEffect(() => {
      getnadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow();
  }, [])

  const getnadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow = async () =>{
      const response = await listaD3();
      console.log(response);
      setnadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow(response.data);
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
      nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow.map((data) => (
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

export default Nadwyzka