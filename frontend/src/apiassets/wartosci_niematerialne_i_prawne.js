import axios from "axios";

const url = "http://127.0.0.1:3006/wartosci_niematerialne_i_prawne";

export const  listaA1 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA1 = async (wartosci_niematerialne_i_prawne) => {
    return await axios.post(url, wartosci_niematerialne_i_prawne);
}
