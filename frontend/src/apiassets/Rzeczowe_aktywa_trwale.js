import axios from "axios";

const url = "http://127.0.0.1:3006/Rzeczowe_aktywa_trwale";

export const  listaA2 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA2 = async (Rzeczowe_aktywa_trwale) => {
    return await axios.post(url, Rzeczowe_aktywa_trwale);
}