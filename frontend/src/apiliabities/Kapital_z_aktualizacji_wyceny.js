

import axios from "axios";

const url = "http://127.0.0.1:3006/Kapital_z_aktualizacji_wyceny";

export const  listaD4 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD4 = async (Kapital_z_aktualizacji_wyceny) => {
    return await axios.post(url, Kapital_z_aktualizacji_wyceny);
}