
import axios from "axios";

const url = "http://127.0.0.1:3006/Zobowiazania_krotkoterminowe";

export const  listaD14 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD14 = async (Zobowiazania_krotkoterminowe) => {
    return await axios.post(url, Zobowiazania_krotkoterminowe);
}
export const  edytujD14 = async (id, Zobowiazania_krotkoterminowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Zobowiazania_krotkoterminowe);
}
export const  usunD14 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}