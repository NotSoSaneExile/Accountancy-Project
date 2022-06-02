import axios from "axios";

const url = "http://127.0.0.1:3006/kredyty_pozyczki";

export const  listaD13 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD13 = async (kredyty_pozyczki) => {
    return await axios.post(url, kredyty_pozyczki);
}