import axios from "axios";

const url = "http://127.0.0.1:3006/nieruchomosci";

export const  listaA7 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajA7 = async (nieruchomosci) => {
    return await axios.post(url, nieruchomosci
        );
}