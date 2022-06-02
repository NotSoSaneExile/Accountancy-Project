import axios from "axios";

const url = "http://127.0.0.1:3006/Nalezne_wplaty_na_kapital_podstawow";

export const  listaA18 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA18= async (Nalezne_wplaty_na_kapital_podstawow) => {
    return await axios.post(url, Nalezne_wplaty_na_kapital_podstawow);
}
export const  edytuj19 = async (id, Nalezne_wplaty_na_kapital_podstawow) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Nalezne_wplaty_na_kapital_podstawow);
}
export const  usun18 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}