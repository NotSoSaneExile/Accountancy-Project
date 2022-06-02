import axios from "axios";

const url = "http://127.0.0.1:3006/Zapasy";

export const  listaA10 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA10= async (Zapasy) => {
    return await axios.post(url, Zapasy);
}