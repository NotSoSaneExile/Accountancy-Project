import axios from "axios";

const url = "http://127.0.0.1:3006/Rzeczowe_aktywa_trwale";

export const  listaA2 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA2 = async (Rzeczowe_aktywa_trwale) => {
    return await axios.post(url, Rzeczowe_aktywa_trwale);
}
export const  edytujA2 = async (id, Rzeczowe_aktywa_trwale) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Rzeczowe_aktywa_trwale);
}
export const  usunA2 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}