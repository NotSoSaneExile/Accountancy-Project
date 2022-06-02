import axios from "axios";

const url = "http://127.0.0.1:3006/Rezerwy_na_zobowiazania";

export const  listaD10 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD10= async (Rezerwy_na_zobowiazania) => {
    return await axios.post(url, Rezerwy_na_zobowiazania);
}