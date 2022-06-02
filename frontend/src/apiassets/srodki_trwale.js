
import axios from "axios";

const url = "http://127.0.0.1:3006/srodki_trwale";

export const  listaA3 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA3 = async (srodki_trwale) => {
    return await axios.post(url, srodki_trwale);
}
export const  edytujA3 = async (id, srodki_trwale) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, srodki_trwale);
}
export const  usunA3 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}