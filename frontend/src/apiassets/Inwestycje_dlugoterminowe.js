

import axios from "axios";

const url = "http://127.0.0.1:3006/Inwestycje_dlugoterminowe";

export const  listaA6 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA6 = async (Inwestycje_dlugoterminowe) => {
    return await axios.post(url, Inwestycje_dlugoterminowe);
}
export const  edytujA6 = async (id, Inwestycje_dlugoterminowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Inwestycje_dlugoterminowe);
}
export const  usunA6 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}