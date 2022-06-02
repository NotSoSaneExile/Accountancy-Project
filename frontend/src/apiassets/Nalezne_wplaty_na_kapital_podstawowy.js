import axios from "axios";

const url = "http://127.0.0.1:3006/Nalezne_wplaty_na_kapital_podstawowy";

export const  listaA19 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA19= async (Nalezne_wplaty_na_kapital_podstawowy) => {
    return await axios.post(url, Nalezne_wplaty_na_kapital_podstawowy);
}