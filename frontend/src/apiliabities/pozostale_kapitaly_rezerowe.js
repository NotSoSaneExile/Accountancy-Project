import axios from "axios";

const url = "http://127.0.0.1:3006/pozostale_kapitaly_rezerowe";

export const  listaD6 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodaD6= async (pozostale_kapitaly_rezerowe) => {
    return await axios.post(url, pozostale_kapitaly_rezerowe);
}