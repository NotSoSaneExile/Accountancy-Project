import axios from "axios";

const url = "http://127.0.0.1:3006/do_12_m";

export const  listaD17 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD17= async (do_12_m) => {
    return await axios.post(url, do_12_m);
}