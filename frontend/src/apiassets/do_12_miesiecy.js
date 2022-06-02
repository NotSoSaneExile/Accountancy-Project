import axios from "axios";

const url = "http://127.0.0.1:3006/do_12_miesiecy";

export const  listaA13 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA13= async (do_12_miesiecy) => {
    return await axios.post(url, do_12_miesiecy);
}