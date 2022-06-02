
import axios from "axios";

const url = "http://127.0.0.1:3006/Zobowiazania_krotkoterminowe";

export const  listaD14 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD14 = async (Zobowiazania_krotkoterminowe) => {
    return await axios.post(url, Zobowiazania_krotkoterminowe);
}