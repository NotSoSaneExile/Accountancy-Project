import axios from "axios";

const url = "http://127.0.0.1:3006/Kapital_zapasowy";

export const  listaD2 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD2 = async (Kapital_zapasowy) => {
    return await axios.post(url, Kapital_zapasowy);
}
export const  edytujD2 = async (id, Kapital_zapasowy) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Kapital_zapasowy);
}
export const  usunD2 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}