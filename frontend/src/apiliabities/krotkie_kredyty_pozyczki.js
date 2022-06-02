
import axios from "axios";

const url = "http://127.0.0.1:3006/krotkie_kredyty_pozyczki";

export const  listaD15 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodaj15 = async (krotkie_kredyty_pozyczki) => {
    return await axios.post(url, krotkie_kredyty_pozyczki);
}
export const  edytujD15 = async (id, krotkie_kredyty_pozyczki) => {
    id =id || '';
    return await axios.put(`${url}/${id}`, krotkie_kredyty_pozyczki);
}
export const  usunD15 = async (id) => {
   
    return await axios.delete(`${url}/${id}`);
}