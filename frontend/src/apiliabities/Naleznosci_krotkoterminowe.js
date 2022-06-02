import axios from "axios";

const url = "http://127.0.0.1:3006/Rezerwy_na_zobowiazania";

export const  listaD10 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD10= async (Rezerwy_na_zobowiazania) => {
    return await axios.post(url, Rezerwy_na_zobowiazania);
}
export const  edytujD10 = async (id, Rezerwy_na_zobowiazania) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Rezerwy_na_zobowiazania);
}
export const  usunD10 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}