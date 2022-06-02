import axios from "axios";

const url = "http://127.0.0.1:3006/Fundusze_specjalne";

export const  listaD19 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD19= async (Fundusze_specjalne) => {
    return await axios.post(url, Fundusze_specjalne);
}
export const  edytujD19 = async (id, Fundusze_specjalne) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Fundusze_specjalne);
}
export const  usunD19 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}