import axios from "axios";

const url = "http://127.0.0.1:3006/z_tutulu_dostaw_uslug";

export const  listaA12 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA12= async (z_tutulu_dostaw_uslug) => {
    return await axios.post(url, z_tutulu_dostaw_uslug);
}