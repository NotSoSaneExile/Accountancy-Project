import axios from "axios";

const url = "http://127.0.0.1:3006/powyzej_12_miesiecy";

export const  listaA14 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA14= async (powyzej_12_miesiecy) => {
    return await axios.post(url, powyzej_12_miesiecy);
}