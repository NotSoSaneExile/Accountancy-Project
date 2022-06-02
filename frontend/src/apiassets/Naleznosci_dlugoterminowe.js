
import axios from "axios";

const url = "http://127.0.0.1:3006/Naleznosci_dlugoterminowe";

export const  listaA5 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA5 = async (Naleznosci_dlugoterminowe) => {
    return await axios.post(url, Naleznosci_dlugoterminowe);
}