import axios from "axios";

const url = "http://127.0.0.1:3006/Zapasy";

export const  listaA10 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA10= async (Zapasy) => {
    return await axios.post(url, Zapasy);
}
export const  edytujA10 = async (id, Zapasy) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Zapasy);
}
export const  usunA10 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}