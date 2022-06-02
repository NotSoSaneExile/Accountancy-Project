import axios from "axios";

const url = "http://127.0.0.1:3006/krotkoterminowe_aktywa_finansowe";

export const  listaA16 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA16= async (krotkoterminowe_aktywa_finansowe) => {
    return await axios.post(url, krotkoterminowe_aktywa_finansowe);
}