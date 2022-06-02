import axios from "axios";

const url = "http://127.0.0.1:3006/Rozliczenia_miedzyokresowe";

export const  listaD20 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD20= async (Rozliczenia_miedzyokresowe) => {
    return await axios.post(url, Rozliczenia_miedzyokresowe);
}
export const  edytujD20 = async (id, Rozliczenia_miedzyokresowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Rozliczenia_miedzyokresoweE);
}
export const  usunD20 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}