import axios from "axios";

const url = "http://127.0.0.1:3006/Inwestycje_krotkoterminowe";

export const  listaA15 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA15= async (Inwestycje_krotkoterminowe) => {
    return await axios.post(url, Inwestycje_krotkoterminowe);
}
export const  edytujA15 = async (id, Inwestycje_krotkoterminowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Inwestycje_krotkoterminowe);
}
export const  usunA15 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}