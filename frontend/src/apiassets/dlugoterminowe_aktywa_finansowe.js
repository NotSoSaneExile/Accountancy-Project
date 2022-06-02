import axios from "axios";

const url = "http://127.0.0.1:3006/dlugoterminowe_aktywa_finansowe";

export const  listaA8 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA8 = async (dlugoterminowe_aktywa_finansowe) => {
    return await axios.post(url, dlugoterminowe_aktywa_finansowe);
}