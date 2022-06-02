import axios from "axios";

const url = "http://127.0.0.1:3006/srodki_w_kasie_na_rachunkach";

export const  listaA17 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA17= async (srodki_w_kasie_na_rachunkach) => {
    return await axios.post(url, srodki_w_kasie_na_rachunkach);
}