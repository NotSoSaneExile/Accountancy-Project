import axios from "axios";

const url = "http://127.0.0.1:3006/Udzialy_wlasne";

export const  listaA20 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA20= async (Udzialy_wlasne) => {
    return await axios.post(url, Udzialy_wlasne);
}