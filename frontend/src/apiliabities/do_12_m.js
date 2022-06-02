import axios from "axios";

const url = "http://127.0.0.1:3006/do_12_m";

export const  listaD17 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD17= async (do_12_m) => {
    return await axios.post(url, do_12_m);
}
export const  edytujD17 = async (id, do_12_m) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, do_12_m);
}
export const  usunD17 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}