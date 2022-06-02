
import axios from "axios";

const url = "http://127.0.0.1:3006/Odpisy_zysku_w_rokue";

export const  listaD9 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD9 = async (Odpisy_zysku_w_rokue) => {
    return await axios.post(url, Odpisy_zysku_w_rokue);
}