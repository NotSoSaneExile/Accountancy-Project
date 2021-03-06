import axios from "axios";

const url = "http://127.0.0.1:3006/z_tytulu_wartosci_godzinowej";

export const  listaD5 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD5= async (z_tytulu_wartosci_godzinowej) => {
    return await axios.post(url, z_tytulu_wartosci_godzinowej);
}
export const  edytujD5 = async (id, z_tytulu_wartosci_godzinowej) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, z_tytulu_wartosci_godzinowej);
}
export const  usunD5 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}