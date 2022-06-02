import axios from "axios";

const url = "http://127.0.0.1:3006/Naleznosci_krotkoterminowe";

export const  listaA11 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA11= async (Naleznosci_krotkoterminowe) => {
    return await axios.post(url, Naleznosci_krotkoterminowe);
}
export const  edytujA11 = async (id, Naleznosci_krotkoterminowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Naleznosci_krotkoterminowe);
}
export const  usunA11 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}
