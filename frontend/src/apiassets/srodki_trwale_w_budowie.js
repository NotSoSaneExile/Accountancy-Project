
import axios from "axios";

const url = "http://127.0.0.1:3006/srodki_trwale_w_budowie";

export const  listaA4 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA4 = async (srodki_trwale_w_budowie) => {
    return await axios.post(url, srodki_trwale_w_budowie);
}