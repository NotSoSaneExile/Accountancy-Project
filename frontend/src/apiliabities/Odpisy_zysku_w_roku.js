
import axios from "axios";

const url = "http://127.0.0.1:3006/Odpisy_zysku_w_roku";

export const  listaD9 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD9 = async (Odpisy_zysku_w_roku) => {
    return await axios.post(url, Odpisy_zysku_w_roku);
}
export const  edytujD9 = async (id, Odpisy_zysku_w_roku) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Odpisy_zysku_w_roku);
}
export const  usunD9 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}