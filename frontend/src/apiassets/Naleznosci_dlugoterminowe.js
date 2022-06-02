
import axios from "axios";

const url = "http://127.0.0.1:3006/Naleznosci_dlugoterminowe";

export const  listaA5 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA5 = async (Naleznosci_dlugoterminowe) => {
    return await axios.post(url, Naleznosci_dlugoterminowe);
}
export const  edytujA5 = async (id, Naleznosci_dlugoterminowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Naleznosci_dlugoterminowe);
}
export const  usunA5 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}
