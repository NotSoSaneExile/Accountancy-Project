import axios from "axios";

const url = "http://127.0.0.1:3006/nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow";

export const  listaD3 = async (id) => {
    id =id || '';
    return await axios.get(`${url}/${id}`);
}
export const  dodajD3= async (nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow) => {
    return await axios.post(url, nadwyzka_wartosci_sprzedazy_nad_wartoscia_nominalna_udzialow);
}