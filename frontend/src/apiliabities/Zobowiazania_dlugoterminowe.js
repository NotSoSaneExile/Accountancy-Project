import axios from "axios";

const url = "http://127.0.0.1:3006/Zobowiazania_dlugoterminowey";

export const  listaD12 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD12= async (Zobowiazania_dlugoterminowey) => {
    return await axios.post(url, Zobowiazania_dlugoterminowey);
}