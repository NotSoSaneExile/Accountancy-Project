import axios from "axios";

const url = "http://127.0.0.1:3006/krotkoterminowe_aktywa_finansowe";

export const  listaA16 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA16= async (krotkoterminowe_aktywa_finansowe) => {
    return await axios.post(url, krotkoterminowe_aktywa_finansowe);
}
export const  edytujA16 = async (id, krotkoterminowe_aktywa_finansowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, krotkoterminowe_aktywa_finansowe);
}
export const  usunA16 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}