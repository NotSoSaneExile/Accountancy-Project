import axios from "axios";

const url = "http://127.0.0.1:3006/Zysk_strata_netto";

export const  listaD8 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD8= async (Zysk_strata_netto) => {
    return await axios.post(url, Zysk_strata_netto);
}
export const  edytujD8 = async (id, Zysk_strata_netto) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Zysk_strata_netto);
}
export const  usunD8 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}