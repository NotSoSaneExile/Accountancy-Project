import axios from "axios";

const url = "http://127.0.0.1:3006/Rezerwa_na_emerytury";

export const  listaD11 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD11 = async (Rezerwa_na_emerytury) => {
    return await axios.post(url, Rezerwa_na_emerytury
        );
}
export const  edytujD11 = async (id, Rezerwa_na_emerytury) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Rezerwa_na_emerytury);
}
export const  usunD11 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}