import axios from "axios";

const url = "http://127.0.0.1:3006/nieruchomosci";

export const  listaA7 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA7 = async (nieruchomosci) => {
    return await axios.post(url, nieruchomosci);
}
export const  edytujA7 = async (id, nieruchomosci) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, nieruchomosci);
}
export const  usunA7 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}