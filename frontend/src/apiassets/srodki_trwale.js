
import axios from "axios";

const url = "http://127.0.0.1:3006/srodki_trwale";

export const  listaA3 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA3 = async (srodki_trwale) => {
    return await axios.post(url, srodki_trwale);
}