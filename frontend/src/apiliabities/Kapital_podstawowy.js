import axios from "axios";

const url = "http://127.0.0.1:3006/Kapital_podstawowy";

export const  listaD1 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD1 = async (Kapital_podstawowy) => {
    return await axios.post(url, Kapital_podstawowy);
}
export const  edytujD1 = async (id, Kapital_podstawowy) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Kapital_podstawowy);
}
export const  usunD1 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}