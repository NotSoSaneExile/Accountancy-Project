import axios from "axios";

const url = "http://127.0.0.1:3006/Zobowiazania_dlugoterminowe";

export const  listaD12 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD12= async (Zobowiazania_dlugoterminowe) => {
    return await axios.post(url, Zobowiazania_dlugoterminowe);
}
export const  edytujD12 = async (id, Zobowiazania_dlugoterminowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Zobowiazania_dlugoterminowe);
}
export const  usunD12 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}