import axios from "axios";

const url = "http://127.0.0.1:3006/dostawy_uslugi";

export const  listaD16 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD16= async (dostawy_uslugi) => {
    return await axios.post(url, dostawy_uslugi);
}
export const  edytujD16 = async (id, dostawy_uslugi) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, dostawy_uslugi);
}
export const  usunD16 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}