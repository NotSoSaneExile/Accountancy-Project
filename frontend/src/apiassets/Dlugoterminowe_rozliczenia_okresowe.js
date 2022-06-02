import axios from "axios";

const url = "http://127.0.0.1:3006/Dlugoterminowe_rozliczenia_okresowe";

export const  listaA9 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA9 = async (Dlugoterminowe_rozliczenia_okresowe) => {
    return await axios.post(url, Dlugoterminowe_rozliczenia_okresowe);
}
export const  edytujA9 = async (id, Dlugoterminowe_rozliczenia_okresowe) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, Dlugoterminowe_rozliczenia_okresowe);
}
export const  usunA9 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}