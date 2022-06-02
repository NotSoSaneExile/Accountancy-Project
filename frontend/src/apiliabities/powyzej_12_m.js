import axios from "axios";

const url = "http://127.0.0.1:3006/powyzej_12_m";

export const  listaD18 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD18 = async (powyzej_12_m) => {
    return await axios.post(url, powyzej_12_m);
}
