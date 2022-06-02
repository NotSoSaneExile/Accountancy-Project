import axios from "axios";

const url = "http://127.0.0.1:3006/Rozliczenia_miedzyokresowey";

export const  listaD20 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD20= async (Rozliczenia_miedzyokresowey) => {
    return await axios.post(url, Rozliczenia_miedzyokresowey);
}