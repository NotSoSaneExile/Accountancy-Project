import axios from "axios";

const url = "http://127.0.0.1:3006/Naleznosci_krotkoterminowe";

export const  listaA11 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA11= async (Naleznosci_krotkoterminowe) => {
    return await axios.post(url, Naleznosci_krotkoterminowe);
}